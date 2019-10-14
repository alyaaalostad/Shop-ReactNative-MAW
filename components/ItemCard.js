import React, { Component } from "react";

import { Image } from "react-native";
import { Link } from "react-router-dom";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  ListItem
} from "native-base";

class ItemCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <ListItem>
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
      </ListItem>
    );
  }
}

export default ItemCard;
