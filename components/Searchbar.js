import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";
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
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
          />
        </Item>
      </Header>
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
