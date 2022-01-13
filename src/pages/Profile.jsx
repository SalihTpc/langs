import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const email = "You are not LOGGED IN.";
const Profile = () => {
  const myMail = useSelector((state) => state.myEmailReducer);
  return (
    <Container>
      <h3>Display Name</h3>
      <h2>Not Found!</h2>
      <h3>Email</h3>
      <h3>{myMail ? myMail : email}</h3>
    </Container>
  );
};

export default Profile;
