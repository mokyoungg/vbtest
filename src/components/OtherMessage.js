import React, { useEffect, useState } from "react";
import styled from "styled-components";

const OtherMessage = ({ chat }) => {
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
    result && (
      <Wrap>
        <UserWrap>
          <UserImg src={chat["photo_url"]} alt="user_image" />
          <UserName>{chat["user_name"]}</UserName>
        </UserWrap>
        <TextWrap>
          <Text>
            {result}
            {/* {chat.msg.content.split("\n").map((line) => {
            return <span>{line + 1}</span>;
          })} */}
          </Text>
          <Time>{handleTime(chat["created_at"])}</Time>
        </TextWrap>
      </Wrap>
    )
  );
};

export default OtherMessage;

const Wrap = styled.div`
  width: 360px;
`;

const UserWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

const UserImg = styled.img`
  border-radius: 70%;
  width: 35px;
  height: 35px;
`;

const UserName = styled.p`
  margin-top: 0;
  margin-left: 5px;
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 40px;
  margin-top: -30px;
`;

const Text = styled.p`
  background-color: #ffffff;
  border-radius: 12px;
  border-top-left-radius: 0;
  max-width: 220px;
  word-break: break-all;
  padding: 10px;
`;

const Time = styled.div`
  margin-left: 5px;
  font-size: 14px;
  color: #c7c7cc;
  margin-bottom: 15px;
`;
