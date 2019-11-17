import React, { Component } from "react";
import { TaskCard } from "./task-view/TaskCard";
import styled from "styled-components/native";
import { TaskList } from "./task-view/TaskList";
import Icon from "react-native-vector-icons/AntDesign";

export default class HomePage extends Component {
  render() {
    var ITEMS = [1, 2, 3];

    return (
      <Container>
        <Title> Get things done !</Title>
        <DateBar>
          <DateText>{"<date - 1>"}</DateText>
          <DateText>{"<date>"}</DateText>
          <DateText>{"<date + 1>"}</DateText>
        </DateBar>
        <TaskListStyled items={ITEMS}></TaskListStyled>
        <AddTaskIcon name="plus" size={40} color="tomato" />
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: white;
  flex: 1;
  justify-content: flex-start;
  padding-top: 5%;
`;

const DateBar = styled.View`
  justify-content: space-around;
  flex-direction: row;
  padding-top: 5px;
`;

const DateText = styled.Text`
  color: tomato;
  font-size: 20px;
`;

const Title = styled.Text`
  font-size: 35px;
  color: tomato;
  padding-top: 20px;
`;

const TaskListStyled = styled(TaskList)`
  height: 90%;
`;

const AddTaskIcon = styled(Icon)`
  align-self: flex-end;
  margin-right: 20px;
`;
