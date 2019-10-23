import React, { Component } from "react";
import { connect } from "react-redux";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
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
      (counter, item) => parseInt(counter) + parseInt(item.item.price),
      0
    );

    if (total) {
      return total;
    }
    return 0;
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
          source={{
            uri:
              "https://i.pinimg.com/474x/78/85/2c/78852cb7b283f3b465655c343f0ee92a.jpg"
          }}
          style={{ flex: 1, width: null, height: null }}
        >
          <List>
            {cartItems}
            <Text style={{ color: "black" }}>
              Total:${this.Total(this.props.cart)}
            </Text>
            <Button success onPress={() => this.props.checkout()}>
              <Text style={{ marginLeft: 170 }}>Checkout</Text>
            </Button>
          </List>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartState.cart
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
