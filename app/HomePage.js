import React, { Component } from "react";
import { TaskCard } from "./task-view/TaskCard";
import styled from "styled-components/native";
import { TaskList } from "./task-view/TaskList";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Title> Get things done !</Title>
        <TaskList></TaskList>
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 31px;
  color: tomato;
`;
