import React, { Component } from "react";
import { connect } from "react-redux";

//Actions
import { removeItem } from "../redux/actions";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class ItemCartForm extends Component {
  render() {
    const { cart } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}>
            {" "}
            {cart.cart.title}{" "}
          </Text>
        </Left>
        <Text style={{ color: "black" }}>Quantity: {cart.quantity}</Text>

        <Body>
          <Text style={{ color: "black" }}>${cart.cart.price}</Text>
        </Body>
        <Right>
          <Button onPress={() => this.props.removeItem(cart)} transparent>
            <Icon name="trash" style={{ color: "black", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: item => dispatch(removeItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemCartForm);
