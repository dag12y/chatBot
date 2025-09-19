import { useRef } from "react";

export default function ChatForm({ chatHistory, setChatHistory, generateBotReponse }) {
    const inputRef = useRef();

    function handleFormSubmit(e) {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";
        setChatHistory((history) => [
            ...history,
            { role: "user", text: userMessage },
        ]);
        setTimeout(() => {
            setChatHistory((history) => [
                ...history,
                { role: "model", text: "Thinking..." },
            ]);
            generateBotReponse([
                ...chatHistory,
                { role: "user", text: userMessage  },
            ]);
        }, 600);
    }

    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="message ..."
                className="message-input"
                ref={inputRef}
                required
            />
            <button className="down-arrow">
                <i className="fas fa-arrow-up"></i>
            </button>
        </form>
    );
}
