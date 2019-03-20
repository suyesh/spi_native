import React, { Component } from "react";
import { Platform } from "react-native";
import { MapView, Constants, Location, Permissions } from "expo";

import { withPosition } from "../../lib/withPosition";
import { MAPVIEW_DEFAULT_PROPS } from "../../constants";
import { style } from "./mapStyle";

class MapBase extends Component {
  render() {
    const { region } = this.props;
    const { PROVIDER_GOOGLE } = MapView;

    if (region) {
      return (
        <MapView
          ref={gMap => (this.gMaps = gMap)}
          provider={PROVIDER_GOOGLE}
          style={style.map}
          region={region}
          {...MAPVIEW_DEFAULT_PROPS}
        />
      );
    }

    return null;
  }
}

export const Map = withPosition(MapBase);
