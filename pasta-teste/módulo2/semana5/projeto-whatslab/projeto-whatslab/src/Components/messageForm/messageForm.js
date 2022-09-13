import React, { useState } from "react";
import {
    BoxInputs,
  MessageFormContainer,
  SendButton,
  TextInput,
  UserInput
} from "./styled";

function MessageForm(props) {
  const [userValue, setUserValue] = useState("eu");
  const [textValue, setTextValue] = useState("");

  const onChangeUser = (event) => {
    setUserValue(event.target.value);
  };

  const onChangeText = (event) => {
    setTextValue(event.target.value);
  };

  const onSendMessage = (event) => {
    event.preventDefault();
    const message = {
      user: userValue,
      text: textValue
    };

    props.addMessage(message);

    setTextValue("");
  };

  return (
    <BoxInputs>
    <MessageFormContainer onSubmit={onSendMessage}>
      <UserInput
        type="text"
        placeholder={"Usuário"}
        onChange={onChangeUser}
        value={userValue}
      />
      <TextInput
        type="text"
        placeholder={"Mensagem"}
        onChange={onChangeText}
        value={textValue}
      />
      <SendButton>Enviar</SendButton>
    </MessageFormContainer></BoxInputs>
  );
}

export default MessageForm;
