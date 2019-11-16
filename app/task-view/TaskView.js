import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const TaskView = props => (
  <Container>
    <TaskTitle>{props.name}</TaskTitle>
  </Container>
);

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const TaskTitle = styled.Text`
  color: red;
`;
