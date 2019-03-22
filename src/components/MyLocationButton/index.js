import React from "react";
import { TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./myLocationButtonStyle";

const MyLocationButton = () => (
  <TouchableOpacity>
    <Surface style={style.myLocationButton}>
      <MaterialIcons name="my-location" size={27} color="#757575" />
    </Surface>
  </TouchableOpacity>
);

export { MyLocationButton };
