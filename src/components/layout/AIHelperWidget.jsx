import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function AIHelperWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Ref for auto-scrolling
  const messagesEndRef = useRef(null);

  // Automatically scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post("https://path-smart.vercel.app/api/ai-helper/query", {
        page_url: window.location.href,
        user_query: input,
      });

      const aiMsg = { sender: "ai", text: res.data.response || "No response received." };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ AI helper unavailable. Please try again later." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg text-lg"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-xl font-semibold flex justify-between items-center">
            <span>AI Helper</span>
            <button onClick={() => setOpen(false)} className="text-sm hover:text-gray-200">
              ✖
            </button>
          </div>

          {/* Scrollable Chat Section */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg break-words ${
                  m.sender === "user"
                    ? "bg-blue-100 text-right ml-auto w-fit max-w-[90%]"
                    : "bg-gray-100 text-gray-800 mr-auto w-fit max-w-[90%]"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for help..."
              className="flex-1 p-2 outline-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
