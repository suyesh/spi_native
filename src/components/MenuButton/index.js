import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MenuButton = props => (
  <TouchableOpacity onPress={props.openDrawer}>
    <MaterialIcons name="menu" size={30} color="#757575" />
  </TouchableOpacity>
);

export { MenuButton };
