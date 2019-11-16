import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const TaskCard = props => (
  <Container>
    <TaskTitle>{props.taskTitle}</TaskTitle>
    <TaskTitleLine></TaskTitleLine>
    <TaskBody>
      <TaskBodyText>{props.taskBody}</TaskBodyText>
    </TaskBody>
    <TaskFooter>
      <TaskEditButton></TaskEditButton>
    </TaskFooter>
  </Container>
);

const Container = styled.View`
  justify-content: center;
  border: 2px solid tomato;
  border-radius: 20px;
  padding: 10%;
  padding-left: 2%;
  width: 90%;
`;

const TaskTitle = styled.Text`
  color: tomato;
  font-size: 30px;
  padding-left: 10px;
  padding-top: 5px;
`;

const TaskTitleLine = styled.View`
  background-color: tomato;
  height: 1.5px;
`;

const TaskBody = styled.View`
  width: 90%;
  max-height: 40px;
`;

const TaskBodyText = styled.Text`
  color: tomato;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 5px;
`;

const TaskFooter = styled.View``;

const TaskEditButton = styled.View``;
