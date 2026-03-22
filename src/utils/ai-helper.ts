export async function callAI(prompt: string, apiKey: string, model: string) {
    const fetch = (await import("node-fetch")).default;

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost",
            "X-Title": "why-code-exists"
        },
        body: JSON.stringify({
            model,
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API Error:", text);
        throw new Error("AI request failed");
    }

    const data = await res.json() as { choices?: Array<{ message?: { content?: string } }> };
    const content = data?.choices?.[0]?.message?.content;
    return typeof content === 'string' ? content : "No response";
}

export const prompt = (selectedCode: string, parsedBlame: string, history: string) => `
You are a senior software engineer analyzing code.

Code:
${selectedCode}

Git Info:
${parsedBlame}

Git History:
${history}

Explain clearly in plain text (no markdown):

Why this code was written:
What problem it solves:
Risks or improvements:
Who wrote it and when (use Git Info):

Keep it clean and practical.
`;
