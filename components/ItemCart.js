import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button, Container } from "native-base";
// Component
import ItemCartForm from "./ItemCartForm";

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
        <List>
          {cartItems}
          <Text style={{ color: "black" }}>
            Total:${this.Total(this.props.cart)}
          </Text>
          <Button full danger onPress={() => this.props.checkout()}>
            <Text>Checkout</Text>
          </Button>
        </List>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCart);
