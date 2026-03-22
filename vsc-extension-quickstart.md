# VS Code Extension: Why Code Exists

Welcome! 👋
This is your VS Code extension **"Why Code Exists"** — an AI-powered tool that helps developers understand the intent behind code using Git history and AI.

---

## 🚀 Getting Started

1. Open this project in VS Code

2. Run the extension:

   Press `F5`

3. A new **Extension Development Host** window will open

---

## 🧪 Using the Extension

1. Open any file inside a Git repository
2. Select a line or block of code
3. Right-click in the editor
4. Click:

   **👉 Explain Why Code Exists**

The extension will analyze:

* Git blame (author + date)
* Git history (line evolution)
* Selected code

…and generate an AI-powered explanation.

---

## ⚙️ Configuration

Before using, you must set your OpenRouter API key.

### Option 1: Settings UI

* Open Settings (`Ctrl + ,`)
* Search: **Why Code Exists**
* Add:

  * API Key
  * Model (e.g., `openai/gpt-4o-mini`)

---

### Option 2: settings.json

```json
{
  "whyCodeExists.apiKey": "your-api-key",
  "whyCodeExists.model": "openai/gpt-4o-mini"
}
```

---

## 🧠 Features

* 🔍 Context-aware code explanation
* 🤖 AI-powered reasoning (OpenRouter)
* 🧬 Git integration (`blame` + `log`)
* 📊 Structured output (why, problem, risks, author)

---

## 🛠️ Development Notes

* Built using TypeScript
* Uses Node.js `child_process` for Git commands
* Uses OpenRouter API for AI responses

---

## ⚠️ Requirements

* Git must be installed
* File must be inside a Git repository
* Valid OpenRouter API key required


## 💡 Tip

If the command doesn’t appear in right-click:

* Make sure code is selected
* Reload the extension

---

## 🎯 Goal of This Extension

> Help developers understand *why code exists*, not just what it does.

---

Happy coding 🚀
