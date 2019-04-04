import React from "react";
import { MainContainer } from "../components";
import { Map, Header } from "../containers";
import { Entypo } from "@expo/vector-icons";

const Main = props => (
  <MainContainer>
    <Map />
    <Header {...props} />
  </MainContainer>
);

export default Main;
