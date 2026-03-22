import * as vscode from "vscode";
import { showWebview } from "./web-view";
import { parseBlame } from "./utils/helper";
import { runGitBlame, runGitHistory } from "./utils/git-utils";
import { callAI, prompt } from "./utils/ai-helper";

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		"why-code-exists.explainCode",
		async () => {
			const editor = vscode.window.activeTextEditor;

			if (!editor) {
				vscode.window.showErrorMessage("No active editor");
				return;
			}

			const selection = editor.selection;

			if (selection.isEmpty) {
				vscode.window.showErrorMessage("Please select a line of code");
				return;
			}

			const selectedCode = editor.document.getText(selection);

			const line = selection.start.line + 1;
			const filePath = editor.document.uri.fsPath;

			try {

				const config = vscode.workspace.getConfiguration("whyCodeExists");
				const apiKey = config.get<string>("apiKey");
				const model = config.get<string>("model") || "openai/gpt-4o-mini";

				if (!apiKey) {
					vscode.window.showErrorMessage("Please set OpenRouter API key in settings");
					return;
				}

				const blame = await runGitBlame(filePath, line);
				const history = await runGitHistory(filePath, line);

				const parsedBlame = parseBlame(blame);

				vscode.window.withProgress(
					{
						location: vscode.ProgressLocation.Notification,
						title: "Analyzing code...",
						cancellable: false,
					},
					async () => {
						return await (async () => {
							try {
								const aiResponse = await callAI(prompt(selectedCode, parsedBlame, history), apiKey, model);

								const safeResponse =
									typeof aiResponse === "string" ? aiResponse : "No response from AI";

								const cleanResponse = safeResponse
									.replace(/[#*]/g, "")
									.replace(/\n{2,}/g, "\n");

								console.log("Opening webview...");
								showWebview(cleanResponse);

							} catch (err) {
								vscode.window.showErrorMessage("AI request failed");
							}
						})();
					}
				);

			} catch (err) {
				vscode.window.showErrorMessage("Git command failed. Are you in a git repo?");
			}
		}
	);

	context.subscriptions.push(disposable);
}


export function deactivate() { }