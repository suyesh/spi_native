import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Main from "./src/Main";

const App = createDrawerNavigator({
  Home: {
    screen: Main
  },
  SubwayLines: {
    screen: Main
  }
});

export default createAppContainer(App);
