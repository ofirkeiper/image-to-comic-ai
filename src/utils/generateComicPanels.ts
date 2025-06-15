
export async function generateComicPanels(
  text: string,
  apiKey: string,
  maxPanels: number = 6
): Promise<string[]> {
  if (!apiKey) throw new Error("OpenAI API key missing");
  const prompt = `
You are a comic script writer. Given a short story, event, or moment, break it into a Marvel-style comic summary with up to ${maxPanels} vividly captioned panels.
Each panel should:
- Advance the story (e.g. intro, conflict, climax, resolution).
- Use short, dynamic language. Write dialogue in ALL CAPS and narration in present tense.
Respond ONLY with a numbered list of the panel captions. No explanation.
Text: """${text}"""
Panels:
  `;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  const completion = data?.choices?.[0]?.message?.content || "";

  // Parse numbered list (e.g. "1. Text\n2. Text\n...")
  const matches = completion.match(/^\d+\.\s+(.*)$/gm);
  if (matches?.length) {
    return matches.map(p => p.replace(/^\d+\.\s+/, "").trim()).filter(Boolean);
  }

  // Fallback: Try splitting by newlines (very rare)
  return completion.split('\n').map(s => s.trim()).filter(Boolean);
}
