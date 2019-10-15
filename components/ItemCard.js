import React, { Component } from "react";
import { withNavigation } from "react-navigation";

import { Image } from "react-native";
import { Content, Card, CardItem, Text, ListItem } from "native-base";

function ItemCard(props) {
  const handlePress = () => {
    props.navigation.navigate("DetailScreen", { itemID: item.id });
  };
  const item = props.item;
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

export default withNavigation(ItemCard);
