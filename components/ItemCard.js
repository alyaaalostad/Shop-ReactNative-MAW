import React, { Component } from "react";
import { withNavigation } from "react-navigation";

import { Image } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  ListItem,
  Body,
  Icon
} from "native-base";
import { connect } from "react-redux";
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
const mapDispatchToProps = dispatch => {
  return {
    addCart: item => dispatch(addCart(item))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(withNavigation(ItemCard));
