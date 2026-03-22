# 🚀 Why Code Exists — VS Code Extension

## 📌 Overview

**Why Code Exists** is a VS Code extension that helps developers understand not just *what* code does, but *why it was written*.

When working in a codebase, especially a large or unfamiliar one, developers often struggle to understand the reasoning behind certain implementations. This tool bridges that gap by combining Git history with AI to provide meaningful context.

---

## 🧠 What It Does

* Allows developers to select any line of code
* Extracts Git information:

  * Author and timestamp using `git blame`
  * Code evolution using `git log -L`
* Sends this context along with the selected code to an AI model
* Generates a structured explanation of:

  * Why the code was written
  * What problem it solves
  * Risks or improvements
  * Who wrote it and when

---

## ❗ Problem It Solves

Most tools and editors explain *what code does*, but they fail to explain:

* Why a specific logic exists
* Why certain decisions were made
* What historical context led to the current implementation

This extension solves that by combining:

* Version control intelligence (Git)
* AI reasoning

👉 Result: Faster onboarding, better understanding, and improved decision-making for developers.

---

## ⚙️ How to Install & Run from Source

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd why-code-exists
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the extension

```bash
npm run compile
```

### 4. Run the extension

* Open the project in VS Code
* Press `F5`
* A new **Extension Development Host** window will open

---

## 🧪 How to Use

1. Open any file inside a Git repository
2. Select a line or block of code
3. Right-click → **Explain Why Code Exists**

The extension will analyze the code and display results in a structured UI.

---

## ⚙️ Configuration

Set your OpenRouter API key:

### VS Code Settings

* Open Settings (`Ctrl + ,`)
* Search: **Why Code Exists**
* Add:

  * API Key
  * Model (e.g., `openai/gpt-4o-mini`)

Note:- Free modal support also available from open router  

---

## 🧩 Hardest Problem I Faced

While building the extension, I initially displayed the AI output using VS Code’s popup (`showInformationMessage`).

However, this created a major usability issue:

* Long responses were getting truncated
* The content was not readable
* Important context was being lost

### ✅ Solution

I replaced the popup with a **Webview Panel**, which:

* Displays full content without truncation
* Supports structured UI
* Provides a much better developer experience

This change significantly improved both usability and presentation of the results.

---

## 🤖 LLM Conversation
   https://chatgpt.com/share/69bfa33f-a2f0-8002-9e1b-5b2c624e3127
---

## 🚀 What I Would Do Next

With more time, I would enhance the extension by:

* Implementing caching for faster responses
* Improving UI with richer components

---

## 💡 Key Insight

> Most tools explain *what* code does.
> This extension explains *why it exists.*

---
