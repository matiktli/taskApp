import * as React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";
import { ReminderBadge } from "./ReminderBadge";

export const TaskCard = props => (
  <Container>
    <HeaderContainer>
      <TaskTitle>{props.taskTitle}</TaskTitle>
      <TaskEditButton name="edit" size={25} color="tomato" />
    </HeaderContainer>
    <TaskTitleLine></TaskTitleLine>
    <TaskBody>
      <TaskBodyText>{props.taskBody}</TaskBodyText>
    </TaskBody>
    <TaskFooter>
      <ReminderBadgeStyled></ReminderBadgeStyled>
    </TaskFooter>
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  border: 2px solid tomato;
  border-radius: 20px;
  padding: 10%;
  padding-left: 2%;
  width: 90%;
  align-self: center;
  margin-top: 3%;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  min-height: 40px;
  align-self: stretch;
  margin-top: 10px;
`;

const TaskTitle = styled.Text`
  color: tomato;
  width: 100%;
  font-size: 30px;
  padding-left: 10px;
`;

const TaskEditButton = styled(Icon)``;

const TaskTitleLine = styled.View`
  background-color: tomato;
  height: 1.5px;
  margin-top: 4px;
`;

const TaskBody = styled.View`
  width: 100%;
  max-height: 40px;
  margin-top: 7px;
`;

const TaskBodyText = styled.Text`
  color: tomato;
  width: 100%;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 5px;
`;

const TaskFooter = styled.View`
  align-self: flex-end;
`;

const ReminderBadgeStyled = styled(ReminderBadge)`
  align-self: flex-end;
`;
