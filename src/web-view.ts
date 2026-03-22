import * as vscode from "vscode";

export function getWebviewHTML(content: string): string {
    return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<style>
			body {
				font-family: sans-serif;
				padding: 16px;
				background: #1e1e1e;
				color: #ddd;
			}
			h2 {
				color: #4fc3f7;
			}
			.section {
				margin-bottom: 16px;
				padding: 12px;
				background: #2d2d2d;
				border-radius: 8px;
			}
		</style>
	</head>
	<body>
		<h2>Why This Code Exists</h2>
		<div class="section">${content.replace(/\n/g, "<br>")}</div>
	</body>
	</html>
	`;
}

export function showWebview(content: string) {
    const panel = vscode.window.createWebviewPanel(
        "codeInsight",
        "Why This Code Exists",
        vscode.ViewColumn.Beside,
        {
            enableScripts: true,
            retainContextWhenHidden: true
        }
    );

    panel.reveal(vscode.ViewColumn.Beside, true);

    panel.webview.html = getWebviewHTML(content);
}