import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const NewMessage = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  const inputHandler = (e) => {
    let currentTime = getTime();
    setMessage(e.target.value);
    setTime(currentTime);
  };

  const getTime = () => {
    let result = "";
    let today = new Date();

    let tempDate = today.toLocaleDateString();
    let date = tempDate.replace(/\./g, "").split(" ").join("-");

    let tempTime = today.toLocaleTimeString("en-US", { hour12: false });
    let time = tempTime;

    result = date + " " + time;
    return result;
  };

  const handleKeyPress = (e) => {
    if (message.length > 0 && e.keyCode === 13) {
      sendMessage({ message, time });
    }
  };

  return (
    <Wrap>
      <MessageWrap>
        <Message
          type="text"
          placeholder="메시지"
          value={message}
          onChange={inputHandler}
          onKeyPress={handleKeyPress}
        />
        {message.length > 0 && (
          <SendButton onClick={() => sendMessage({ message, time })}>
            <ArrowBackIcon />
          </SendButton>
        )}
      </MessageWrap>
    </Wrap>
  );
};

export default NewMessage;

const Wrap = styled.div`
  width: 360px;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const MessageWrap = styled.div`
  width: 330px;
  height: 40px;
  border-radius: 12px;
  background-color: #f6f6f8;
  border: 1px solid #f6f6f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Message = styled.input`
  width: 70%;
  height: 30px;
  border: none;
  background-color: #f6f6f8;
  outline: none;
  margin-left: 10px;
`;

const SendButton = styled.div`
  border-radius: 50%;
  background-color: #8a74ff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  color: #ffffff;
  height: 30px;
`;
