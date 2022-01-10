import React from "react";
import styled from "styled-components";
import CW from "../assets/cw.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

const About = () => {
  return (
    <Container>
      <Logo src={CW} />
      <h2>About</h2>
    </Container>
  );
};

export default About;
