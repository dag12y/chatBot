import { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import downArrowImage from "/assets/downArrow.svg";

function App() {
    const [chatHistory, setChatHistory] = useState([]);
    const [showChatbot, setshowChatbot] = useState(false);

    function generateBotReponse(history) {
        console.log(history);
    }

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
                <div className="chat-body">
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
