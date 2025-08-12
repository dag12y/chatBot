
export default function ChatForm(){
  return (
      <form action="#" className="chat-form">
          <input
              type="text"
              placeholder="message ..."
              className="message-input"
              required
          />
          <button className="down-arrow">⬆️</button>
      </form>
  );
}
