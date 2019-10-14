import React from "react";
import { connect } from "react-redux";

import { View, List } from "native-base";

// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import SearchBars from "./SearchBars";

import { fetchItems } from "../redux/actions";

class ItemsList extends React.Component {
  state = { collapsed: false };
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.title} item={item} />
    ));
    if (this.props.loading) return <Loading />;
    return (
      <View>
        <SearchBars />
        <List>{allItems}</List>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  items: state.rootList.items,
  filteredItems: state.rootList.filteredItems,
  loading: state.rootList.loading
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
