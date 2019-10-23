import React, { Component } from "react";
import { connect } from "react-redux";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import splash from "../assets/splash2.png";
// NativeBase Components
import { List, Button, Container } from "native-base";
// Component
import ItemCartForm from "./ItemCartForm";
import IconList from "./IconList";

//Actions
import { checkout } from "../redux/actions";

class ItemCart extends Component {
  Total = cart => {
    const total = cart.reduce(
      (counter, item) => parseFloat(counter) + parseFloat(item.item.price),
      0
    );

    if (total) {
      return total;
    }
    return 0;
  };
  onClick = () => {
    if (this.props.user)
      return (
        <Button success onPress={() => this.props.checkout()}>
          <Text style={{ marginLeft: 170 }}>Checkout</Text>
        </Button>
      );
    else {
      return (
        <Button
          success
          onPress={() => this.props.navigation.navigate("SingupScreen")}
        >
          <Text style={{ marginLeft: 170 }}>Checkout</Text>
        </Button>
      );
    }
  };
  render() {
    let cart = this.props.cart;
    let cartItems;
    if (cart) {
      cartItems = cart.map((cartItem, index) => (
        <ItemCartForm cartItem={cartItem} key={index} />
      ));
    }

    return (
      <Container>
        <ImageBackground
          source={splash}
          style={{ flex: 1, width: null, height: null }}
        >
          <List>
            {cartItems}
            <Text style={{ color: "black" }}>
              Total:${this.Total(this.props.cart)}
            </Text>
            {this.onClick()}
          </List>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartState.cart,
  user: state.authState.user
});

const mapDispatchToProps = dispatch => {
  return {
    checkout: () => dispatch(checkout())
  };
};
ItemCart.navigationOptions = () => {
  return {
    headerRight: <IconList />
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCart);
