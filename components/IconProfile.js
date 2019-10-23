import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class IconProfile extends Component {
  render() {
    return (
      <Icon
        style={{ color: "white", marginLeft: 15 }}
        name="user"
        type="FontAwesome"
        onPress={() => this.props.navigation.navigate("ProfileScreen")}
      />
    );
  }
}
export default withNavigation(IconProfile);
