import React, { Component } from "react";
import { connect } from "react-redux";

//components
import IconRegister from "./IconRegister";
import IconProfile from "./IconProfile";

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

class ItemsList extends Component {
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.title} item={item} />
    ));
    return (
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/474x/78/85/2c/78852cb7b283f3b465655c343f0ee92a.jpg"
        }}
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
    headerRight: <IconRegister />,
    headerLeft: <IconProfile />
    headerRight: <CartButton />
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
