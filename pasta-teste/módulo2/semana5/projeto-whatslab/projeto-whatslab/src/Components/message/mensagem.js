import React from "react";
import {
  MessageBox,
  MessageContainer,
  UsernameContainer
} from "./Style";


function Message(props) {
  const onDoubleClick = () => {
    if (window.confirm("Tem certeza que deseja deletar essa mensagem?")) {
      props.deleteMessage(props.message);
    }
  };

  let position;
  let username;

  if (props.message.user === "eu") {
    position = "right";
  } else {
    position = "left";
    username = <UsernameContainer>{props.message.user}</UsernameContainer>;
  }

  return (
    <MessageContainer onDoubleClick={onDoubleClick}>
      <MessageBox position={position}>
        {username}
        {props.message.text}
      </MessageBox>
    </MessageContainer>
  );
}

export default Message;
