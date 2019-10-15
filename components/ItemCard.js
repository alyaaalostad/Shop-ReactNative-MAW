import React, { Component } from "react";

import { Image, View } from "react-native";
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
import { withNavigation } from "react-navigation";

class ItemCard extends Component {
  render() {
    const handlePress = () => {
      this.props.navigation.navigate("DetailScreen", { itemID: item.id });
    };
    const item = this.props.item;
    return (
      <ListItem>
        <Content>
          <Card>
            <CardItem button onPress={handlePress}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 200, width: null, flex: 1 }}
              />
              <Text>{item.title}</Text>
            </CardItem>
          </Card>
        </Content>
      </ListItem>
    );
  }
}

export default withNavigation(ItemCard);
