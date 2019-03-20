import React from "react";
import { SafeAreaView } from "react-native";
import { style } from "./containerStyle";

export const MainContainer = ({ children }) => (
  <SafeAreaView style={style.container}>{children}</SafeAreaView>
);
