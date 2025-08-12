import ChatbotIcon from "./components/ChatbotIcon";
import downArrowImage from "/assets/downArrow.svg";

function App() {
    return (
        <div className="container">
            <div className="chatbot-popup">
                {/* {Header} */}
                <div className="chat-header">
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
                    <ChatbotIcon />
                    <div className="mesage bot-message">
                        <p className="message-text">
                            Hey there 👋 <br />
                            How can i help you?
                        </p>
                    </div>
                    <div className="mesage user-message">
                        <p className="message-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                    </div>
                </div>

                {/* {Footer} */}
                <div className="chat-footer">
                    <form action="#" className="chat-form">
                        <input
                            type="text"
                            placeholder="message ..."
                            className="message-input"
                            required
                        />
                        <button className="down-arrow">
                            ⬆️
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
