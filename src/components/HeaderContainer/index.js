import React from "react";
import { View } from "react-native";
import { TOP_MARGIN } from "../../constants";
import { style } from "./headerContainerStyle";

const HeaderContainer = ({ children }) => (
  <View style={style.headerContainer}>{children}</View>
);

export { HeaderContainer };
