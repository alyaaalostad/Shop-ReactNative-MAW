import React, { Component } from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import greenHouse from "../assets/greenHouse.jpg";
class WelcomePage extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/474x/78/85/2c/78852cb7b283f3b465655c343f0ee92a.jpg"
        }}
        style={{ flex: 1, width: null, height: null }}
      >
        <Image
          source={greenHouse}
          style={{ height: 185, width: 155, marginLeft: 130, marginTop: 90 }}
        />
        <Content padder>
          <Button
            bordered
            success
            style={{ backgroundColor: "#FFF" }}
            onPress={() => this.props.navigation.navigate("ListScreen")}
          >
            <Text style={{ marginLeft: 170, fontFamily: "TrebuchetMS-Italic" }}>
              Shop
            </Text>
          </Button>
        </Content>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb15: {
    marginBottom: 20,
    width: 90
  }
});

export default WelcomePage;
