import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
            {
                contents: [{ role: "user", parts: [{ text: message }] }],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
                },
            }
        );

        const botResponse = response.data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't understand that.";

        res.status(200).json({ response: botResponse });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Failed to fetch response from Gemini API" });
    }
}
