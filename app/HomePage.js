import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TaskView } from "./task-view/TaskView";
import styled from "styled-components/native";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Title> Get things done !</Title>
        <TaskView name="This is first task!"></TaskView>
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
