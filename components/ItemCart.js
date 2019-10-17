import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import ItemCartForm from "./ItemCartForm";

//Actions
import { checkout } from "../redux/actions";

class ItemCart extends Component {
  render() {
    let cart = this.props.cart;
    let cartItems;
    if (cart) {
      cartItems = cart.map((cart, index) => (
        <ItemCartForm cart={cart} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => this.props.checkout()}>
          <Text>Checkout</Text>
        </Button>
      </List>
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
