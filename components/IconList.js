import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class IconRegister extends Component {
  render() {
    return (
      <Icon
        style={{ color: "white", marginRight: 30 }}
        name="home"
        type="FontAwesome"
        onPress={() => this.props.navigation.navigate("ListScreen")}
      />
    );
  }
}
export default withNavigation(IconRegister);
