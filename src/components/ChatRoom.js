import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { URL } from "../Config";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";
import NewMessage from "./NewMessage";

const ChatRoom = () => {
  const [chatList, setChatList] = useState([]);
  const [addedChatList, setAddedChatList] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    getData();
  }, [active]);

  const getData = () => {
    if (addedChatList.length === 0) {
      fetch(`${URL}`)
        .then((res) => res.json())
        .then((res) => {
          let chatList = handleChatList(res);
          setChatList(chatList);
        });
    } else {
      setChatList(addedChatList);
    }
  };

  const handleChatList = (arr) => {
    let result = [];

    result = arr.sort((a, b) => {
      if (a["created_at"] < b["created_at"]) {
        return -1;
      }
      if (a["created_at"] > b["created_at"]) {
        return 1;
      }
      if (a["created_at"] === b["created_at"] && a["id"] < b["id"]) {
        return -1;
      }
      if (a["created_at"] === b["created_at"] && a["id"] > b["id"]) {
        return 1;
      }
    });
    return result;
  };

  const sendMessage = (e) => {
    let tempList = chatList;
    let data = {};

    const message = e.message;
    const time = e.time;

    data = {
      user_id: 1,
      created_at: time,
      msg: {
        mtype: "text",
        content: message,
      },
    };

    tempList.push(data);

    setAddedChatList(tempList);
    setActive(!active);
  };

  return (
    <Wrap>
      {chatList.map((chat) => {
        if (chat["user_id"] === 1) {
          return <MyMessage key={chat.id} chat={chat} />;
        } else if (chat["user_id"] === 2) {
          return <OtherMessage key={chat.id} chat={chat} />;
        }
      })}
      <NewMessage sendMessage={sendMessage} />
    </Wrap>
  );
};

export default ChatRoom;

const Wrap = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;
