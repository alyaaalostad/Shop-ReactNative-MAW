import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class IconRegister extends Component {
  render() {
    return (
      <Icon
        style={{ color: "white", marginRight: 15 }}
        name="log-in"
        type="Feather"
        onPress={() => this.props.navigation.navigate("SingupScreen")}
      />
    );
  }
}
export default withNavigation(IconRegister);
