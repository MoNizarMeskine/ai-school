import express from "express";
import { exec } from "child_process";
import bodyParser from "body-parser";
import cors from "cors";
import OpenAI from "openai"; // Import OpenAI SDK
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from the `.env` file

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// Compile the C file
exec(
  "gcc src/backend/signup.c -o src/backend/signup $(pkg-config --cflags --libs libmongoc-1.0)",
  (error, stdout, stderr) => {
    if (error) {
      console.error("Compilation Error:", stderr);
    } else {
      console.log("C file compiled successfully");
    }
  }
);

// Route to handle user signup
app.post("/signup", (req, res) => {
  const { firstName, lastName, age, email, password } = req.body;

  exec(
    `./src/backend/signup "${firstName}" "${lastName}" "${age}" "${email}" "${password}"`,
    (error, stdout, stderr) => {
      if (error) {
        res.status(500).send(`Error: ${stderr}`);
        return;
      }
      res.send(stdout);
    }
  );
});

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your .env file has OPENAI_API_KEY
});

// Route to handle chatbot interactions
app.post("/chat", async (req, res) => {
  try {
    const { message, subject } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use the required model
      messages: [
        { role: "system", content: `You are a tutor specializing in ${subject}.` },
        { role: "user", content: message },
      ],
      response_format: {
        type: "text",
      },
      temperature: 1,
      max_completion_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response.choices && response.choices.length > 0) {
      res.json({ reply: response.choices[0].message.content });
    } else {
      res.status(400).json({ error: "No response generated from the model." });
    }
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});