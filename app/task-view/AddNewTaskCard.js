import * as React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

export const AddNewTaskCard = props => (
  <Container>
    <AddTaskIcon name="plus" size={25} color="tomato" />
    <AddTaskText>{"Add new task"}</AddTaskText>
  </Container>
);

const Container = styled.View`
  margin: 10px;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;

const AddTaskIcon = styled(Icon)``;

const AddTaskText = styled.Text`
  color: tomato;
`;
