import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_SYSTEM_INSTRUCTION } from "./botPersona";
import "./Chatbot.css"; 

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi there! 👋 Thanks for visiting my website. Feel free to ask me anything about web development or what I offer.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setLoading(true);

    const updatedMessages = [...messages, { role: "user", text: userMessage }];
    setMessages(updatedMessages);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
      });

      // Filters out the starting welcome message so chat session starts on a 'user' turn
      const history = messages
        .filter((_, index) => index > 0)
        .map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.text }],
        }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userMessage);
      const responseText = result.response.text();

      setMessages([...updatedMessages, { role: "model", text: responseText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages([
        ...updatedMessages,
        { role: "model", text: "Oops, Something went wrong. Please try again in a bit!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING LAUNCHER BUTTON */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chatbot-launcher">
          <i class="fa-solid fa-message"></i>
          <span>Chat with Rei</span>
        </button>
      )}

      {/* EXPANDED CHAT BOX WINDOW */}
      {isOpen && (
        <div className="chatbot-box">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-avatar-container">
              <div className="chatbot-avatar-placeholder"><img src="favicon1.png"></img></div>
              <div className="chatbot-header-info">
                <span className="chatbot-bot-name">Chat with Reimier</span>
                <span className="chatbot-status">
                  <span className="chatbot-green-dot"></span> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close-button">&times;</button>
          </div>

          {/* Messages Feed */}
          <div className="chatbot-messages-window">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message-row ${msg.role}`}>
                <div className={`chatbot-bubble ${msg.role}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="chatbot-message-row model">
                <div className="chatbot-typing-indicator">Rei is typing...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Footer Input Form */}
          <form onSubmit={handleSend} className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="chatbot-input-field"
              disabled={loading}
            />
            <button type="submit" className="chatbot-send-button" disabled={loading}><i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      )}
    </>
  );
}