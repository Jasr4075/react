import React, { useState } from 'react';
import './ChatBubble.css';
import { Toaster, toast } from 'react-hot-toast';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

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
            <button onClick={() => toast.success('Mensaje enviado correctamente')}>Enviar</button>
          </div>
        </div>
      )}
      <Toaster />

    </div>

  );
};

export default ChatBubble;
