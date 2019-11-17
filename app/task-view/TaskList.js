import * as React from "react";
import styled from "styled-components/native";
import { TaskCard } from "./TaskCard";
import { SafeAreaView, ScrollView } from "react-native";

export const TaskList = props => (
  <SafeAreaView>
    <Container>
      {props.items.map(ele => (
        <TaskCardStyled
          key={ele}
          taskTitle={props.title ? props.title : "Default task title"}
          taskBody={
            props.body
              ? props.body
              : "Default task body text here just for mock. This is used as quick description"
          }
        ></TaskCardStyled>
      ))}
    </Container>
  </SafeAreaView>
);
const Container = styled(ScrollView)`
  padding-top: 10px;
`;

const TaskCardStyled = styled(TaskCard)``;
