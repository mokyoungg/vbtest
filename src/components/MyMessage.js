import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MyMessage = ({ chat }) => {
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setContent(chat.msg.content);
    if (content) {
      splitContent();
    }
  }, [content]);

  const splitContent = () => {
    if (content) {
      let temp = "";
      temp = content.split("\\n").join("\n");
      // result = content.split(" ");
      setResult(temp);
    }
  };

  const handleTime = (str) => {
    let result = "";
    const timeString = str.split(" ")[1];
    const hour = +timeString.substr(0, 2);
    const newHour = hour % 12 || 12;
    const ampm = hour < 12 || hour === 24 ? "오전" : "오후";
    result = ampm + " " + newHour + timeString.substr(2, 3);

    return result;
  };

  return (
    <Wrap>
      <Time>{handleTime(chat["created_at"])}</Time>
      <Text>{result}</Text>
    </Wrap>
  );
};

export default MyMessage;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 360px;
`;

const Text = styled.p`
  background-color: #8a74ff;
  border-radius: 12px;
  max-width: 220px;
  word-break: break-all;
  padding: 10px;
  margin-right: 10px;
  color: #ffffff;
`;

const Time = styled.p`
  margin-right: 5px;
  font-size: 14px;
  color: #c7c7cc;
`;
