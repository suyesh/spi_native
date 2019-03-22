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
        <MenuButton />
        <HeaderSearchButton />
        <MyLocationButton />
      </HeaderContainer>
    );
  }
}

export { Header };
