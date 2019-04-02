import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  headerSearchButton: {
    flex: 1,
    marginHorizontal: 15,
    height: 50
  },
  headerSearchButtonSurface: {
    elevation: 3,
    flex: 1,
    borderRadius: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20
  },
  text: {
    fontSize: 18,
    marginLeft: 15,
    color: "grey"
  }
});
