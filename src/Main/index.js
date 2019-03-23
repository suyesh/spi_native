import React from "react";
import { MainContainer } from "../components";
import { Map, Header } from "../containers";
import BottomSheet from "reanimated-bottom-sheet";
import { Surface, Text } from "react-native-paper";

const Main = () => (
  <MainContainer>
    <Map />
    <Header />
    <BottomSheet
      snapPoints={[600, 300, 50]}
      renderContent={() => (
        <Surface style={{ width: "100%", height: "100%" }}>
          <Text>Hello</Text>
        </Surface>
      )}
      renderHeader={() => (
        <Surface style={{ width: "100%" }}>
          <Text>Hello</Text>
        </Surface>
      )}
      initialSnap={2}
    />
  </MainContainer>
);

export default Main;
