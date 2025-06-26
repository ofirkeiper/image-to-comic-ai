import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function generateComic(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "אתה תסריטאי קומיקס. צור קומיקס בן 4 סצנות עם תיאור לכל סצנה וטקסט בועות." },
        { role: "user", content: prompt }
      ]
    });

    console.log("🎨 קומיקס:\n", response.choices[0].message.content);
  } catch (err) {
    console.error("❌ שגיאה:", err);
  }
}

// דוגמה
generateComic("קומיקס על ילד בשם תום שמגלה מערה עם חייזרים מתוקים");
