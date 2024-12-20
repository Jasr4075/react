import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import styled from "styled-components";

const ChatContainer = styled.div`
  .chat-bubble-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
  }

  .chat-icon {
    width: 60px;
    height: 60px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
  }

  .chat-icon.open {
    background-color: #0056b3;
  }

  .chat-box {
    width: 300px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 90px;
    right: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chat-header {
    background-color: #007bff;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }

  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  .chat-body {
    padding: 10px;
    flex: 1;
  }

  .chat-body textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
  }

  .chat-footer {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
  }

  .chat-footer button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .chat-footer button:hover {
    background-color: #0056b3;
  }
`;

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <ChatContainer>
      <div className="chat-bubble-container">
        <div
          className={`chat-icon ${isOpen ? "open" : ""}`}
          onClick={toggleChat}
        >
          💬
        </div>

        {isOpen && (
          <div className="chat-box">
            <div className="chat-header">
              <span>Contate-Nos</span>
              <button className="close-btn" onClick={toggleChat}>
                X
              </button>
            </div>
            <div className="chat-body">
              <textarea
                placeholder="Escreva sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="chat-footer">
              <button
                onClick={() => toast.success("Mensagem enviada com sucesso")}
              >
                Enviar
              </button>
            </div>
          </div>
        )}
        <Toaster />
      </div>
    </ChatContainer>
  );
};

export default ChatBubble;
