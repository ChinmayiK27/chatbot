function ChatBubble({ sender, text }) {
  const isUser = sender === 'user';
  return (
    <div className={`chat-bubble ${isUser ? 'user' : 'bot'}`}>
      <div className="bubble-label">{isUser ? 'You' : 'Companion'}</div>
      <div className="bubble-text">{text}</div>
    </div>
  );
}

export default ChatBubble;
