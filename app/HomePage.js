import React, { Component } from "react";
import { TaskCard } from "./task-view/TaskCard";
import styled from "styled-components/native";
import { TaskList } from "./task-view/TaskList";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View } from "react-native";
import { Badge } from "react-native-elements";
import Moment from "moment";
import SwipeablePanel from "rn-swipeable-panel";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeablePanelActive: false
    };
  }

  openPanel = () => {
    console.log("TODO");
    this.setState({ swipeablePanelActive: true });
  };

  closePanel = () => {
    this.setState({ swipeablePanelActive: false });
  };

  render() {
    var ITEMS = [
      {
        id: 1,
        title: "Workout",
        body: "I need to do tssssssssssssssssssssssshis to stay in shape",
        done: false
      },
      {
        id: 2,
        title: "I need to do very loong stuff",
        body: "And that will be smalssssssssssssssssssssssssssssssl",
        done: true
      },
      {
        id: 3,
        title: "Workout",
        body: "I need to do this to stay in shape",
        done: true
      },
      {
        id: 4,
        title: "I need to do very loong stuff",
        body: "And that will be small",
        done: false
      }
    ];
    var currentDate = Moment(new Date()).format("DD-MM-YYYY");
    return (
      <Container>
        <Title> Get things done !</Title>
        <DateBar>
          <DateLabel date={currentDate} onPress={this.openPanel}></DateLabel>
          <RightBarContainer>
            <CounterBadge onPress={() => showOnlyTodoClicked()}>
              {getDoneTasks(ITEMS) + "/" + ITEMS.length}
            </CounterBadge>
          </RightBarContainer>
        </DateBar>
        <TaskListStyled items={ITEMS}></TaskListStyled>
        <SwipeablePanel
          isActive={this.state.swipeablePanelActive}
          onClose={() => this.closePanel()}
        />
        <Footer></Footer>
      </Container>
    );
  }
}

function getDoneTasks(tasks) {
  return tasks.filter(ele => ele.done == true).length;
}

function showOnlyTodoClicked() {
  console.log("Show only todo clicked");
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

const RightBarContainer = styled.View`
  flex-direction: row;
`;

const OnlyTodoIcon = styled(Icon)`
  margin-right: 20px;
  justify-content: flex-start;
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
