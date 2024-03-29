import { Dimensions } from "react-native";
import { Constants } from "expo";

export const LOCATION_ACCESS_ERROR = "Permission to access location was denied";

export const LOCATION_STATUS = {
  GRANTED: "granted"
};

export const LATLNG_DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export const MAPVIEW_DEFAULT_PROPS = {
  loadingEnabled: true,
  showsUserLocation: true,
  followsUserLocation: true,
  showsCompass: false,
  showsScale: false,
  showsIndoors: false
};

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;

export const TOP_MARGIN = Constants.statusBarHeight;
