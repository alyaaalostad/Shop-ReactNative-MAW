import React, { Component } from "react";
import { connect } from "react-redux";

//components
import IconRegister from "./IconRegister";
import IconProfile from "./IconProfile";

import {
  List,
  Content,
  Button,
  Text,
  Header,
  Left,
  Right,
  Title,
  Icon,
  Body
} from "native-base";

// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import Searchbar from "./Searchbar";
import { login, signup, checkForExpiredToken, logout } from "../redux/actions";

class ItemsList extends Component {
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.title} item={item} />
    ));
    return (
      <Content>
        <Searchbar />
        <List>{this.props.loading ? <Loading /> : allItems}</List>
        <></>
      </Content>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
