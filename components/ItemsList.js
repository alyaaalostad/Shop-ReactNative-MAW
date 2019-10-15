import React from "react";
import { connect } from "react-redux";
import { List, Content, Container } from "native-base";
import { Image, View } from "react-native";
// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import SearchBars from "./SearchBars";

import { fetchItems } from "../redux/actions";

class ItemsList extends React.Component {
  state = { collapsed: false };
  componentDidMount() {
    // console.log("In component did mount", this.props.items);
    this.props.fetchItems();
  }
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.title} item={item} />
    ));
    if (this.props.loading) return <Loading />;
    return (
      <Content>
        <SearchBars />
        <List>{allItems}</List>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  items: state.listState.items,
  filteredItems: state.listState.filteredItems,
  loading: state.listState.loading
});
const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
