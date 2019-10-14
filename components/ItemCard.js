import React, { Component } from "react";

import { Image } from "react-native";
import { Link } from "react-router-dom";

import { Container, Header, Content, Card, CardItem, Text } from "native-base";

class ItemCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem cardBody>
              {/* <Link to={`/item/${item.id}`}> */}
              <Image
                source={{ uri: item.image }}
                style={{ height: 200, width: null, flex: 1 }}
              />
              {/* </Link> */}
              <Text>{item.title}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default ItemCard;
