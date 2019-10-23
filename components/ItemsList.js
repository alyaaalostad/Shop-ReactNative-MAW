import React, { Component } from "react";
import { connect } from "react-redux";
import IconRegister from "./IconRegister";

import {
  List,
  Content,
  Button,
  Header,
  Left,
  Right,
  Title,
  Icon,
  Body
} from "native-base";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { login, signup, checkForExpiredToken, logout } from "../redux/actions";
// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import Searchbar from "./Searchbar";
import CartButton from "./CartButton";
import splash2 from "../assets/splash2.png";

class ItemsList extends Component {
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.title} item={item} />
    ));
    return (
      <ImageBackground
        source={splash2}
        style={{ flex: 1, width: null, height: null }}
      >
        <Content>
          <Searchbar />
          <List>{this.props.loading ? <Loading /> : allItems}</List>
        </Content>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.listState.loading,
  items: state.listState.items,
  filteredItems: state.listState.filteredItems
});
const mapDispatchToProps = dispatch => {
  return {
    login: (userData, navigation) => dispatch(login(userData, navigation)),
    checkForToken: navigation => dispatch(checkForExpiredToken(navigation))
  };
};
ItemsList.navigationOptions = () => {
  return {
    title: "Green House",
    headerLeft: <IconRegister />,
    headerRight: <CartButton />
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
