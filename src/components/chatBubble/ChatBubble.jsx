import React, { useState } from 'react';
import './ChatBubble.css';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    alert(`Mensaje enviado: ${message}`);
    setMessage('');
  };

  return (
    <div className="chat-bubble-container">
      {/* Icono de la burbuja */}
      <div className={`chat-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        💬
      </div>

      {/* Ventana de chat */}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Contáctanos</span>
            <button className="close-btn" onClick={toggleChat}>X</button>
          </div>
          <div className="chat-body">
            <textarea
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="chat-footer">
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
