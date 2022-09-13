import React, { useState } from "react";
import MessageForm from "./Components/messageForm/messageForm";
import Message from "./Components/message/mensagem";
import { AppContainer, MessagesContainer } from "./StyledApp";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (mensagem) => {
    const newListMessage = [...messages, mensagem];
    setMessages(newListMessage);
  };

  const deleteMessage = (mensagem) => {
    const filterResult = messages.filter((msg) => msg !== mensagem);
    setMessages(filterResult);
  };
  const resultMessageMapping = messages.map((message, index) => (
    <Message
      deleteMessage={deleteMessage}
      message={message}
      key={index}
    ></Message>
  ));

  return (
    <AppContainer>
      <MessagesContainer>{resultMessageMapping}</MessagesContainer>
      <MessageForm addMessage={addMessage} />
    </AppContainer>
  );
}
export default App;
