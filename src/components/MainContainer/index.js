import React from "react";
import { View } from "react-native";
import { style } from "./containerStyle";

export const MainContainer = ({ children }) => (
  <View style={style.container}>{children}</View>
);
