import React, { Component } from "react";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return {
    items: state.listState.items
  };
};

export default connect(mapStateToProps)(ItemDetail);
