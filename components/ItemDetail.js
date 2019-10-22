import React, { Component } from "react";
import { connect } from "react-redux";
//actions
import * as actionCreators from "../redux/actions/";
import { addCart } from "../redux/actions";
import { Image } from "react-native";
//components
import CartButton from "./CartButton";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

// Components
import Loading from "./Loading";

class ItemDetail extends Component {
  render() {
    const id = this.props.navigation.getParam("itemID");
    const item = this.props.items.find(i => i.id == id);

    if (!item) return <Loading />;
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{item.title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>Description: {item.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body transparent textStyle={{ color: "#87838B" }}>
                <Text>Quantity: {item.quantity}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body transparent textStyle={{ color: "#87838B" }}>
                <Text>Price: ${item.price}</Text>
              </Body>
              <Right>
                <Body>
                  <Icon
                    name="shopping-cart"
                    type="FontAwesome"
                    onPress={() => this.props.addCart({ item, quantity: 1 })}
                  >
                    <Text>Add To Cart</Text>
                  </Icon>
                </Body>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.listState.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCart: item => dispatch(addCart(item))
  };
};

ItemDetail.navigationOptions = {
  headLeft: null,
  headerRight: <CartButton />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
