import React, { Component } from "react";
import { MapView, Location, Permissions, Constants } from "expo";

import {
  LOCATION_ACCESS_ERROR,
  LOCATION_STATUS,
  LATLNG_DELTA
} from "../constants";

const { GRANTED } = LOCATION_STATUS;
const { PROVIDER_GOOGLE } = MapView;
const { LOCATION, askAsync } = Permissions;
const { getCurrentPositionAsync } = Location;
const errorMessage = LOCATION_ACCESS_ERROR;

export const withPosition = Comp => {
  return class WithPosition extends Component {
    state = {
      region: null,
      errorMessage: null
    };

    componentWillMount() {
      this.getLocationAsync();
    }

    getLocationAsync = async () => {
      const { status } = await askAsync(LOCATION);
      if (status === GRANTED) this.getCurrentPosition();
      if (status !== GRANTED) this.setError();
    };

    getCurrentPosition = async () => {
      const { coords } = await getCurrentPositionAsync({});
      const { latitude, longitude } = coords;
      this.setRegion({ latitude, longitude });
    };

    setError = () => {
      this.setState({ errorMessage });
    };

    setRegion = ({ latitude, longitude }) => {
      this.setState({
        region: {
          latitude,
          longitude,
          ...LATLNG_DELTA
        }
      });
    };

    render() {
      return <Comp {...this.state} {...this.props} />;
    }
  };
};
