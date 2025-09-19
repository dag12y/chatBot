import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import downArrowImage from "/assets/downArrow.svg";

function App() {
    const [chatHistory, setChatHistory] = useState([]);
    const [showChatbot, setshowChatbot] = useState(false);
    const chatBodyRef = useRef();

    async function generateBotReponse(history) {
        function updateHistory(text,isError) {
            setChatHistory((prev) => [
                ...prev.filter((msg) => msg.text !== "Thinking..."),
                { role: "model", text,isError  },
            ]);
        }

        // 1. Format history for Gemini API
        const formattedHistory = history.map(({ role, text }) => ({
            role,
            parts: [{ text: String(text) }],
        }));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: formattedHistory }),
        };

        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL,
                requestOptions
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || "Something went wrong!");
            }

            const apiResponseText = data.candidates[0].content.parts[0].text
                .replace(/\*\*(.*?)\*\*/g, "$1")
                .trim();

            updateHistory(apiResponseText);
        } catch (error) {
            updateHistory(error.message,true)
        }
    }

    useEffect(() => {
        chatBodyRef.current.scrollTo({
            top: chatBodyRef.current.scrollHeight,
            behvior: "smooth",
        });
    }, [chatHistory]);

    return (
        <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
            <button
                className="chatbot-toggler"
                onClick={() => {
                    setshowChatbot((prev) => !prev);
                }}
            >
                <span>
                    <i className="fas fa-comment"></i>
                </span>
                <span>
                    <i className="fas fa-close"></i>
                </span>
            </button>
            <div className="chatbot-popup">
                {/* {Header} */}
                <div className="chatbot-header">
                    <div className="header-info">
                        <ChatbotIcon />
                        <h2 className="logo-text">Chatbot</h2>
                    </div>
                    <button
                        className="down-arrow"
                        onClick={() => {
                            setshowChatbot((prev) => !prev);
                        }}
                    >
                        <img src={downArrowImage} alt="down arrow" />
                    </button>
                </div>

                {/* {Body} */}
                <div ref={chatBodyRef} className="chat-body">
                    <div className="message bot-message">
                        <ChatbotIcon />
                        <p className="message-text">
                            Hey there 👋 <br />
                            How can i help you?
                        </p>
                    </div>

                    {/* {rendering chat history dynamically} */}
                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))}
                </div>

                {/* {Footer} */}
                <div className="chat-footer">
                    <ChatForm
                        chatHistory={chatHistory}
                        setChatHistory={setChatHistory}
                        generateBotReponse={generateBotReponse}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
