import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  View,
  H1
} from "native-base";

import { connect } from "react-redux";
import { login, signup, checkForExpiredToken, logout } from "../redux/actions";

class SignupForm extends Component {
  state = {
    username: "",
    password: ""
  };
  componentDidMount = () => {
    this.props.checkForToken();
  };

  ButtonsView() {
    if (this.props.user) {
      return (
        <Button onPress={() => this.props.logout()}>
          <Text>Logout</Text>
        </Button>
      );
    } else {
      return (
        <View>
          <Button
            style={{
              backgroundColor: "#6ea181",
              marginTop: 40,
              width: 100,
              height: 50,
              marginLeft: 150
            }}
            onPress={() => this.props.login(this.state, this.props.navigation)}
          >
            <Text style={{ marginLeft: 10 }}>Login</Text>
          </Button>
          <Button
            style={{
              backgroundColor: "#6ea181",
              marginTop: 2,
              marginLeft: 150,
              width: 100,
              height: 50
            }}
            onPress={() => this.props.signup(this.state, this.props.navigation)}
          >
            <Text style={{ marginLeft: 5 }}> Signup</Text>
          </Button>
        </View>
      );
    }
  }

  FieldsView() {
    const { username, password } = this.state;
    if (this.props.user) {
      return <H1 style={{ marginTop: 15, marginBottom: 15 }}>Welcome !</H1>;
    } else {
      return (
        <View>
          <Item style={{ borderStyle: "solid", borderWidth: 5 }}>
            <Input
              name="username"
              value={username}
              placeholder="Username"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item last>
            <Input
              value={password}
              placeholder="Password"
              secureTextEntry
              name="password"
              onChangeText={password => this.setState({ password })}
            />
          </Item>
        </View>
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            {this.FieldsView()}
            {this.ButtonsView()}
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authState.user
});

const mapDispatchToProps = dispatch => {
  return {
    login: (userData, navigation) => dispatch(login(userData, navigation)),
    logout: () => dispatch(logout()),
    signup: (userData, navigation) => dispatch(signup(userData, navigation)),
    checkForToken: navigation => dispatch(checkForExpiredToken(navigation))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
