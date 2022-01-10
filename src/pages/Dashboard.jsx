import React from "react";
import styled from "styled-components";
import MyCards from "../components/MyCards";

const Title = styled.h1`
  text-align: center;
`;

const Dashboard = () => {
  return (
    <div>
      <Title>──── Dashboard ────</Title>
      <MyCards />
    </div>
  );
};

export default Dashboard;
