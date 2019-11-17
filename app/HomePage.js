import React, { Component } from "react";
import { TaskCard } from "./task-view/TaskCard";
import styled from "styled-components/native";
import { TaskList } from "./task-view/TaskList";
import Icon from "react-native-vector-icons/AntDesign";
import { View } from "react-native";
import { Badge } from "react-native-elements";
import Moment from "moment";

export default class HomePage extends Component {
  render() {
    var ITEMS = [1, 2, 3, 4, 5, 6];
    var currentDate = Moment(new Date()).format("DD-MM-YYYY");
    return (
      <Container>
        <Title> Get things done !</Title>
        <DateBar>
          <DateLabel date={currentDate}></DateLabel>
          <CounterBadge>{2 + "/" + ITEMS.length}</CounterBadge>
        </DateBar>
        <TaskListStyled items={ITEMS}></TaskListStyled>
        <Footer></Footer>
      </Container>
    );
  }
}

const Container = styled.SafeAreaView`
  background-color: white;
  justify-content: flex-start;
  padding-top: 5%;
  padding-bottom: 10px;
`;

const DateBar = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;

const DateLabel = props => <DateText>{props.date}</DateText>;

const DateText = styled.Text`
  color: tomato;
  font-size: 20px;
`;

const CounterBadge = styled.Text`
  font-size: 15px;
  background-color: white;
  justify-content: center;
  align-self: center;
  color: tomato;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px tomato;
  border-radius: 15px;
`;

const Title = styled.Text`
  font-size: 35px;
  color: tomato;
  padding-top: 20px;
`;

const TaskListStyled = styled(TaskList)`
  height: 90%;
`;

const Footer = styled.View`
  height: 100px;
`;
