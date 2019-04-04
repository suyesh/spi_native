import React from "react";
import { Animated, Text } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import { Surface } from "react-native-paper";
import Main from "./src/Main";

const CustomDrawer = props => {
  const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });
  return (
    <Animated.ScrollView style={{ flex: 1, transform: [{ translateX }] }}>
      <SafeAreaView
        style={{ flex: 1 }}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <DrawerItems {...props} />
      </SafeAreaView>
    </Animated.ScrollView>
  );
};

const App = createDrawerNavigator(
  {
    Home: {
      screen: Main
    },
    SubwayLines: {
      screen: Main
    }
  },
  {
    contentComponent: CustomDrawer,
    drawerWidth: 300,
    drawerBackgroundColor: "#2c3e50"
  }
);

export default createAppContainer(App);
