import * as React from "react";
import styled from "styled-components/native";
import { TaskCard } from "./TaskCard";
import { AddNewTaskCard } from "./AddNewTaskCard";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";

export const TaskList = props => (
  <SafeAreaViewContainer>
    <Container>
      {props.items.map(taskData => (
        <TaskCardContainer
          key={taskData.id}
          onLongPress={() => longPress(taskData)}
        >
          <TaskCardStyled
            key={taskData.id}
            title={taskData.title ? taskData.title : "Default task title"}
            body={
              taskData.body
                ? taskData.body
                : "Default task body text here just for mock. This is used as quick description" +
                  "asdasdddddddddddddddddddddddddddddddddddddddddd"
            }
            isDone={taskData.done}
          ></TaskCardStyled>
        </TaskCardContainer>
      ))}
      <AddNewTaskCard></AddNewTaskCard>
    </Container>
  </SafeAreaViewContainer>
);

function longPress(taskData) {
  console.log("clicked: ", taskData.done);
  taskData.done = !taskData.done;
}

const SafeAreaViewContainer = styled(SafeAreaView)`
  height: 80%;
`;

const Container = styled(ScrollView)`
  padding-top: 10px;
`;

const TaskCardContainer = styled(TouchableOpacity)`
  margin-bottom: 3%;
  min-height: 150px;
`;

const TaskCardStyled = styled(TaskCard)``;
