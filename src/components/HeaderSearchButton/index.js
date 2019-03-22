import React from "react";
import { Searchbar } from "react-native-paper";
import { style } from "./headerSearchButtonStyle";

const HeaderSearchButton = () => (
  <Searchbar placeholder="Search" style={style.headerSearchButton} />
);

export { HeaderSearchButton };
