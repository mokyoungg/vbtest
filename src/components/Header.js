import React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Header = () => {
  return (
    <Wrap>
      <ChevronLeftIcon />
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 360px;
  height: 40px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
`;
