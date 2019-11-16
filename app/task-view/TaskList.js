import React from "react";
import styled from "styled-components/native";
import { TaskCard } from "./TaskCard";

export const TaskList = props => (
  <TaskCard
    taskTitle={props.title ? props.title : "Default task title"}
    taskBody={
      props.body
        ? props.body
        : "Default task body text here. This is used as quick description"
    }
  ></TaskCard>
);
