"use client";  // ✅ Ensures it's a Client Component

import { useState } from "react";

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);
        setInput("");

        fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("API Response:", data);
                const botMessage = { role: "bot", text: data.response };
                setMessages((prev) => [...prev, botMessage]);
            })
            .catch((err) => console.error("Error:", err))
            .finally(() => setLoading(false));
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Gemini AI Chatbot</h2>
            <div className="h-64 overflow-y-auto border p-3 bg-white rounded-lg">
                {messages.map((msg, index) => (
                    <p key={index} className={msg.role === "user" ? "text-right text-blue-600" : "text-left text-gray-800"}>
                        <strong>{msg.role === "user" ? "You: " : "Bot: "}</strong> {msg.text}
                    </p>
                ))}
                {loading && <p className="text-gray-500">Thinking...</p>}
            </div>
            <div className="flex mt-3">
                <input
                    type="text"
                    className="flex-grow p-2 border rounded-l-lg"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                    Send
                </button>
            </div>
        </div>
    );
}
