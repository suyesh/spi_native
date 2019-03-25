import React from "react";
import { MainContainer } from "../components";
import { Map, Header, BottomContent } from "../containers";
import { Entypo } from "@expo/vector-icons";

const Main = () => (
  <MainContainer>
    <Map />
    <Header />
    <BottomContent />
  </MainContainer>
);

export default Main;
