import React from "react";
import { TouchableOpacity } from "react-native";
import { Surface, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./headerSearchButtonStyle";

const HeaderSearchButton = () => (
  <TouchableOpacity style={style.headerSearchButton}>
    <Surface style={style.headerSearchButtonSurface}>
      <MaterialIcons name="search" size={24} color="grey" />
      <Text style={style.text}>Search...</Text>
    </Surface>
  </TouchableOpacity>
);

export { HeaderSearchButton };
