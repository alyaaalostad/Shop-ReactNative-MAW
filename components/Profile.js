import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Thumbnail,
  List,
  ListItem
} from "native-base";

//components
import Loading from "./Loading";
import Default from "../default.jpg";

//actions
import { fetchProfile, logout } from "../redux/actions";

class Profile extends Component {
  componentDidMount = async () => {
    if (this.props.user) await this.props.fetchProfile();
  };

  render() {
    if (!this.props.user) return this.props.navigation.navigate("SignupScreen");

    if (this.props.loading) return <Loading />;

    const userInfo = this.props.user;
    const profileInfo = this.props.profile;

    let image = profileInfo.image;
    if (!image) image = Default;

    let pastOrders = [];

    profileInfo.past_orders.map(order => {
      pastOrders.push(
        <ListItem key={order.id}>
          <Text>
            {order.date} {order.total}$
          </Text>
        </ListItem>
      );
    });

    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Welcome {userInfo.username}</Text>
              <Thumbnail
                source={image}
                style={{ borderRadius: "50%", width: "120px", height: "100px" }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Full Name: {profileInfo.user.first_name}
                  {profileInfo.user.last_name}
                </Text>
                <Text>Email: {profileInfo.user.email}</Text>
                <Text>Phone Number: {profileInfo.number}</Text>
                <Text>Bio: {profileInfo.bio}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button
                bordered
                onClick={() =>
                  this.props.navigation.navigate("EditProfileScreen")
                }
              >
                <Text>Edit Profile</Text>
              </Button>
              <Button
                bordered
                danger
                onClick={() => this.props.logout(this.props.navigation)}
              >
                <Text>Logout</Text>
              </Button>
            </CardItem>
          </Card>
          <List>{pastOrders}</List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authState.user,
  profile: state.rootProfile.profile,
  loading: state.rootProfile.loading
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile()),
  logout: navigation => dispatch(logout(navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
