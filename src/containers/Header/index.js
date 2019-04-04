import React, { Component } from "react";
import {
  HeaderContainer,
  MenuButton,
  HeaderSearchButton,
  MyLocationButton
} from "../../components";

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <MenuButton {...this.props.navigation} />
        <HeaderSearchButton />
        <MyLocationButton />
      </HeaderContainer>
    );
  }
}

export { Header };
