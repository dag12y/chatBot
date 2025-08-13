import { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from './components/ChatForm'
import ChatMessage from "./components/ChatMessage";
import downArrowImage from "/assets/downArrow.svg";

function App() {

    const [chatHistory,setChatHistory]=useState([]);

    return (
        <div className="container">
            <div className="chatbot-popup">
                {/* {Header} */}
                <div className="chatbot-header">
                    <div className="header-info">
                        <ChatbotIcon />
                        <h2 className="logo-text">Chatbot</h2>
                    </div>
                    <button className="down-arrow">
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
                    {chatHistory.map((chat,index)=>(
                        <ChatMessage key={index} chat={chat}/>
                    ))}
                    
                </div>

                {/* {Footer} */}
                <div className="chat-footer">
                    <ChatForm setChatHistory={setChatHistory}/>
                </div>
            </div>
        </div>
    );
}

export default App;
