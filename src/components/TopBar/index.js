import React, { Component } from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { TOP_MARGIN } from "../../constants";

class TopBar extends Component {
  state = {
    firstQuery: ""
  };
  render() {
    const { firstQuery } = this.state;
    return (
      <View
        style={{
          width: "100%",
          height: 60,
          position: "absolute",
          top: 0,
          marginTop: TOP_MARGIN,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 20
        }}
      >
        <TouchableOpacity>
          <MaterialIcons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <Searchbar
          placeholder="Search"
          onChangeText={query => {
            this.setState({ firstQuery: query });
          }}
          value={firstQuery}
          style={{
            flex: 1,
            marginHorizontal: 10,
            borderRadius: 50
          }}
        />
        <TouchableOpacity>
          <MaterialIcons name="my-location" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

export { TopBar };
