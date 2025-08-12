import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from './components/ChatForm'
import downArrowImage from "/assets/downArrow.svg";

function App() {
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
                    <div className="message user-message">
                        <p className="message-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                    </div>
                </div>

                {/* {Footer} */}
                <div className="chat-footer">
                    <ChatForm />
                </div>
            </div>
        </div>
    );
}

export default App;
