import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const email = "salihtopcu@hotmail.com.tr";
const Profile = () => {
  return (
    <Container>
      <h3>Display Name</h3>
      <h2>Not Found!</h2>
      <h3>Email</h3>
      <h3>{email}</h3>
    </Container>
  );
};

export default Profile;
