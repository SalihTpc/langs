import React from "react";
import styled from "styled-components";
import CW from "../assets/cw.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

const Error = () => {
  return (
    <Container>
      <h2>Wrong way to GO !!!</h2>
      <Logo src={CW} />
    </Container>
  );
};

export default Error;
