import * as React from "react";
import styled from "styled-components/native";
import { TaskCard } from "./TaskCard";
import { AddNewTaskCard } from "./AddNewTaskCard";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Row
} from "react-native";

export const TaskList = props => (
  <SafeAreaViewContainer>
    <GradientTop colors={["white", "#FFD0BA"]} start={[0, 0.1]}>
      <Container bounces={true} bouncesZoom>
        {props.items.map(taskData => (
          <TaskCardContainer
            key={taskData.id}
            delayPressIn={300}
            onLongPress={() => longPress(taskData)}
          >
            <TaskCardStyled
              key={taskData.id}
              title={taskData.title ? taskData.title : "Default task title"}
              body={
                taskData.body
                  ? taskData.body
                  : "Default task body text here just for mock. This is used as quick description"
              }
              isDone={taskData.done}
            ></TaskCardStyled>
          </TaskCardContainer>
        ))}
        <AddNewTaskCard onPress={() => addTaskClicked()}></AddNewTaskCard>
      </Container>
    </GradientTop>
  </SafeAreaViewContainer>
);

function longPress(taskData) {
  console.log("clicked: ", taskData.done);
  taskData.done = !taskData.done;
}

function addTaskClicked() {
  console.log("Task add clicked.");
}

const SafeAreaViewContainer = styled(SafeAreaView)`
  height: 80%;
`;

const Container = styled(ScrollView)`
  padding-top: 10px;
`;

const GradientTop = styled(LinearGradient)`
  height: 100%;
`;

const TaskCardContainer = styled.TouchableOpacity`
  margin-bottom: 3%;
  min-height: 150px;
`;

const TaskCardStyled = styled(TaskCard)``;
