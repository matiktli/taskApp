import * as React from "react";
import styled from "styled-components/native";
import { TaskCard } from "./TaskCard";
import { AddNewTaskCard } from "./AddNewTaskCard";
import { SafeAreaView, ScrollView, Text } from "react-native";

export const TaskList = props => (
  <SafeAreaViewContainer>
    <Container>
      {props.items.map(ele => (
        <TaskCardStyled
          key={ele}
          title={props.title ? props.title : "Default task title"}
          body={
            props.body
              ? props.body
              : "Default task body text here just for mock. This is used as quick description"
          }
          isDone={ele % 2 == 0}
        ></TaskCardStyled>
      ))}
      <AddNewTaskCard></AddNewTaskCard>
    </Container>
  </SafeAreaViewContainer>
);

const SafeAreaViewContainer = styled(SafeAreaView)`
  height: 80%;
`;

const Container = styled(ScrollView)`
  padding-top: 10px;
`;

const TaskCardStyled = styled(TaskCard)``;
