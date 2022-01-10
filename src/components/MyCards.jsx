import React from "react";
import styled from "styled-components";
import { Data } from "../assets/data";
import MyCard from "./MyCard";

// const MyCards = () => {
//   return Data.map((data) => {
//     return <MyCard key={data.id} data={data} />;
//   });
// };

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const MyCards = () => {
  return (
    <Container>
      {Data.map((data) => (
        <MyCard key={data.id} data={data} />
      ))}
    </Container>
  );
};

export default MyCards;
