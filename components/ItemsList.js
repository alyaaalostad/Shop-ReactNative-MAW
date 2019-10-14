import React from "react";
import { connect } from "react-redux";
import { View, Row } from "native-base";
// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import { fetchItems } from "../redux/actions";
import SearchBars from "./SearchBars";
class ItemsList extends React.Component {
  state = { collapsed: false };
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.title} item={item} />
    ));
    return (
      <View>
        <SearchBars />
        <Row>{this.props.loading ? <Loading /> : allItems}</Row>
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
