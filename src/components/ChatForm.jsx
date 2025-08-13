import { useRef } from "react";

export default function ChatForm({ setChatHistory }) {
    const inputRef = useRef();

    function handleFormSubmit(e) {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";
        setChatHistory((history) => [
            ...history,
            { role: "User", text: userMessage },
        ]);
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
