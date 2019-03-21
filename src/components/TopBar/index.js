import React, { Component } from "react";
import { View } from "react-native";
import { TOP_MARGIN } from "../../constants";

class TopBar extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "red",
          width: "100%",
          height: 60,
          position: "absolute",
          top: 0,
          marginTop: TOP_MARGIN
        }}
      />
    );
  }
}

export { TopBar };
