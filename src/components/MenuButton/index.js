import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MenuButton = () => (
  <TouchableOpacity>
    <MaterialIcons name="menu" size={30} color="#757575" />
  </TouchableOpacity>
);

export { MenuButton };
