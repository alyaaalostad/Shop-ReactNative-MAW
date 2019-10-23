import React, { Component } from "react";
import { Icon, Left, Text, View, Button } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      <View style={{ marginRight: 50 }}>
        <Icon
          name="cart"
          type="EvilIcons"
          style={{ color: "white", width: 30, height: 25 }}
          transparent
          onPress={() => this.props.navigation.navigate("CartScreen")}
        />
        <Text> {this.props.cart.length}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartState.cart
});

export default connect(mapStateToProps)(withNavigation(CartButton));
