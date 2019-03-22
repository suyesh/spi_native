import { StyleSheet } from "react-native";
import { TOP_MARGIN } from "../../constants";

export const style = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 60,
    position: "absolute",
    top: 0,
    marginTop: TOP_MARGIN,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20
  }
});
