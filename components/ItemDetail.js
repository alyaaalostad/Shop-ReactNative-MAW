import React, { Component } from "react";
import { connect } from "react-redux";
//actions
import * as actionCreators from "../redux/actions/";
import { addCart } from "../redux/actions";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
//components
import CartButton from "./CartButton";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";

// Components
import Loading from "./Loading";

class ItemDetail extends Component {
  render() {
    const id = this.props.navigation.getParam("itemID");
    const item = this.props.items.find(i => i.id == id);

    if (!item) return <Loading />;
    return (
      <Container style={styles.container}>
        <Content>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Body>
                  <Text>{item.title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>Description: {item.description}</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body transparent textStyle={{ color: "#87838B" }}>
                <Text>Price: ${item.price}</Text>
              </Body>
              <Right>
                <Body>
                  <Icon
                    name="shopping-cart"
                    type="FontAwesome"
                    onPress={() => this.props.addCart({ item, quantity: 1 })}
                  >
                    <Text>Add To Cart</Text>
                  </Icon>
                </Body>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 20
  },
  mb: {
    marginBottom: 15
  }
});

const mapStateToProps = state => {
  return {
    items: state.listState.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCart: item => dispatch(addCart(item))
  };
};

ItemDetail.navigationOptions = {
  headLeft: null,
  headerRight: <CartButton />
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
