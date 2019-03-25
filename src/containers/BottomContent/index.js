import React, { Component } from "react";
import { View } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import { Surface, Text } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

class BottomContent extends Component {
  render() {
    return (
      <BottomSheet
        snapPoints={[600, 300, 100]}
        renderContent={() => (
          <Surface
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#8e44ad",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 60,
                padding: 10
              }}
            >
              <Entypo name="chevron-thin-up" size={24} color="white" />
            </View>
          </Surface>
        )}
        initialSnap={2}
      />
    );
  }
}

export { BottomContent };
