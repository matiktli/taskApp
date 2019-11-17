import * as React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const ReminderBadge = props => (
  <Container>
    <TimeText>{"12:00"}</TimeText>
    <TimerIcon name="timer" size={25} color="tomato"></TimerIcon>
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  min-height: 40px;
  align-self: stretch;
`;

const TimeText = styled.Text`
  color: tomato;
  font-size: 20px;
`;

const TimerIcon = styled(Icon)``;
