import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  H1
} from "native-base";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { login, signup, checkForExpiredToken, logout } from "../redux/actions";
import splash2 from "../assets/splash2.png";
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
        <View>
          <ImageBackground
            source={splash2}
            style={{ flex: 1, width: null, height: null }}
          >
            <Button
              style={{
                backgroundColor: "#6ea181",
                marginTop: 40
              }}
              onPress={() => this.props.logout()}
            >
              <Text
                style={{ marginLeft: 180, fontFamily: "TrebuchetMS-Italic" }}
              >
                Logout
              </Text>
            </Button>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View>
          <ImageBackground
            source={splash2}
            style={{ flex: 1, width: null, height: null }}
          >
            <Button
              style={{
                backgroundColor: "#6ea181",
                marginTop: 40
              }}
              onPress={() =>
                this.props.login(this.state, this.props.navigation)
              }
            >
              <Text
                style={{ marginLeft: 155, fontFamily: "TrebuchetMS-Italic" }}
              >
                Login
              </Text>
            </Button>
            <Button
              style={{
                backgroundColor: "#6ea181",
                marginTop: 10
              }}
              onPress={() =>
                this.props.signup(this.state, this.props.navigation)
              }
            >
              <Text
                style={{ marginLeft: 150, fontFamily: "TrebuchetMS-Italic" }}
              >
                Signup
              </Text>
            </Button>
          </ImageBackground>
        </View>
      );
    }
  }

  FieldsView() {
    const { username, password } = this.state;
    if (this.props.user) {
      return (
        <H1
          style={{
            marginTop: 15,
            marginBottom: 15,
            fontFamily: "TrebuchetMS-Italic",
            marginLeft: 100
          }}
        >
          Welcome {this.props.user.username}
        </H1>
      );
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
      <ImageBackground
        source={splash2}
        style={{ flex: 1, width: null, height: null }}
      >
        <Container>
          <Header />
          <Content>
            <Form>
              {this.FieldsView()}
              {this.ButtonsView()}
            </Form>
          </Content>
        </Container>
      </ImageBackground>
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
