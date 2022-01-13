import React from "react";
import styled from "styled-components";
import MyCards from "../components/MyCards";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, logIn, logOut } from "../redux/actions";

const Title = styled.h1`
  text-align: center;
`;

const Dashboard = () => {
  // const counter = useSelector((state) => state.counter);
  // const isLogged = useSelector((state) => state.isLogged);
  // const dispatch = useDispatch();
  return (
    <div>
      <Title>──── Dashboard ────</Title>
      <MyCards />
      {/* <Title>Counter: {counter}</Title>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      {!isLogged ? (
        <Title>IsLogged: False</Title>
      ) : (
        <Title>IsLogged: True</Title>
      )}
      <button
        onClick={() => {
          dispatch(logIn());
        }}
      >
        SIGN IN || OUT
      </button> */}
    </div>
  );
};

export default Dashboard;
