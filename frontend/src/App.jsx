import { useState } from 'react';
import ChatBubble from './components/ChatBubble';

const API_URL = 'http://localhost:4000/api/chat';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello. I am your mental health companion. How are you feeling today?' }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(event) {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Server error');
      }

      const botText = data.botAnswer.responseText;
      const botMessage = { id: Date.now() + 1, sender: 'bot', text: botText };
      setMessages((prev) => [...prev, botMessage]);
      setStatus({ mood: data.botAnswer.mood, score: data.moodAnalysis.score, tip: data.botAnswer.tip });
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, sender: 'bot', text: 'I had trouble connecting. Please try again in a moment.' }
      ]);
      setStatus(null);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="page-shell">
      <div className="chat-panel">
        <header className="chat-header">
          <div>
            <h1>Mental Health Companion</h1>
            <p>Share how you feel and receive supportive, mood-aware guidance.</p>
          </div>
        </header>

        <section className="message-list" aria-live="polite">
          {messages.map((message) => (
            <ChatBubble key={message.id} sender={message.sender} text={message.text} />
          ))}
        </section>

        {status && (
          <section className="status-card">
            <strong>Mood detected:</strong> {status.mood}
            <strong>Sentiment score:</strong> {status.score}
            <strong>Relaxation tip:</strong> {status.tip}
          </section>
        )}

        <form className="chat-form" onSubmit={sendMessage}>
          <textarea
            aria-label="Type your message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type how you are feeling..."
            rows={3}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
