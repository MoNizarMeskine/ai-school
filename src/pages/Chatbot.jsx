import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Chatbot = () => {
  const location = useLocation();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSubject(params.get("subject") || "General");
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, subject }),
      });

      const data = await response.json();
      setReply(data.reply || "No response found.");
    } catch (error) {
      console.error("Error:", error);
      setReply("An error occurred while contacting the chatbot.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          {subject} Chatbot
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Ask something about ${subject}...`}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>

        {reply && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            <p className="text-gray-800">
              <span className="font-bold text-blue-600">Bot:</span> {reply}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;