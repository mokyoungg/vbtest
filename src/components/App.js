import React from "react";
import styled from "styled-components";

import Header from "./Header";
import ChatRoom from "./ChatRoom";

const App = () => {
  return (
    <Wrap>
      <Header />
      <ChatRoom />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 720px;
  background-color: #f6f6f8;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    //background: #dfdfdf;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
