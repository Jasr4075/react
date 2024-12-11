import React, { useState } from 'react';
import './ChatBubble.css';
import { Toaster, toast } from 'react-hot-toast';


const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chat-bubble-container">
      <div className={`chat-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        💬
      </div>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Contate-Nos</span>
            <button className="close-btn" onClick={toggleChat}>X</button>
          </div>
          <div className="chat-body">
            <textarea
              placeholder="Escreva sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="chat-footer">
            <button onClick={() => toast.success('Mensagem enviada com sucesso')}>Enviar</button>
          </div>
        </div>
      )}
      <Toaster />

    </div>

  );
};

export default ChatBubble;
