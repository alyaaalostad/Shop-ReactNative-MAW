import React, { Component } from "react";
import { connect } from "react-redux";

//Actions
import { removeCart } from "../redux/actions";

// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Container
} from "native-base";

class ItemCartForm extends Component {
  render() {
    const { cartItem } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}>
            {cartItem.item.title}
          </Text>
        </Left>
        <Text style={{ color: "black" }}>Quantity: {cartItem.quantity}</Text>

        <Body>
          <Text style={{ color: "black" }}>${cartItem.item.price}</Text>
        </Body>
        <Right>
          <Button onPress={() => this.props.removeCart(cartItem)} transparent>
            <Icon
              name="trash"
              style={{ color: "black", fontSize: 21, width: 40 }}
            />
          </Button>
        </Right>
      </ListItem>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cartState.cart
});

const mapDispatchToProps = dispatch => {
  return {
    removeCart: item => dispatch(removeCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCartForm);
