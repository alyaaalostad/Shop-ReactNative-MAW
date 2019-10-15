import React, { Component } from "react";
import { connect } from "react-redux";

import { SearchBar } from "react-native-elements";

//actions
import { filterItems } from "../redux/actions";

class Searchbar extends Component {
  state = {
    search: ""
  };

  updateSearch = query => {
    this.setState({ search: query });
    this.props.filterItems(query);
  };

  render() {
    const search = this.state.search;
    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterItems: query => dispatch(filterItems(query))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Searchbar);
