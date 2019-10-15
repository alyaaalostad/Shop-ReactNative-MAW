import React, { Component } from "react";
import { connect } from "react-redux";

import { List, Content } from "native-base";

// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import Searchbar from "./Searchbar";

class ItemsList extends Component {
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.title} item={item} />
    ));
    return (
      <Content>
        <Searchbar />
        <List>{this.props.loading ? <Loading /> : allItems}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.listState.loading,
  items: state.listState.items,
  filteredItems: state.listState.filteredItems
});

export default connect(mapStateToProps)(ItemsList);
