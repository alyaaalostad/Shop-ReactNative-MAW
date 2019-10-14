import React, { Component } from "react";
import { Image } from "react-native";
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
import { connect } from "react-redux";
//description, quantity, price
//actions
import * as actionCreators from "../redux/actions/index";

class ItemDetail extends Component {
  componentDidMount() {
    this.props.getItem(this.props.navigation.getParam("itemID"));
  }
  render() {
    if (!this.props.item) {
      return <Loading />;
    } else {
      const item = this.props.item;
      const itemName = `${item.title}`;
      return (
        <Container>
          <Header />
          <Content>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{itemName}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 200, width: 200, flex: 1 }}
                  />
                  <Text>description: {item.description}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: "#87838B" }}>
                    <Text>Price: {item.price}</Text>
                  </Button>
                </Left>
                <Right>
                  <Body>
                    <Icon name="shopping-cart" type="FontAwesome">
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
}
const mapStateToProps = state => {
  return {
    item: state.itemState.item
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getItem: itemID => dispatch(actionCreators.fetchItemDetail(itemID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
