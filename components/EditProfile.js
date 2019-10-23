import { connect } from "react-redux";
import React, { Component } from "react";

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";

//actions
import { editProfile, fetchProfile } from "../redux/actions";

//components
import Loading from "./Loading";

class EditProfile extends Component {
  state = {
    user: { first_name: "", last_name: "", email: "" },
    number: "",
    bio: ""
  };

  componentDidMount = async () => {
    await this.props.fetchProfile();

    let profileInfo = this.props.profile;

    this.setState({
      user: {
        first_name: profileInfo.user.first_name,
        last_name: profileInfo.user.last_name,
        email: profileInfo.user.email
      },
      number: profileInfo.number,
      bio: profileInfo.bio
    });
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "first_name" || name === "last_name" || name === "email") {
      let user = { ...this.state.user };
      user[name] = value;
      this.setState({ user });
    } else this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editProfile(this.state);
  };

  render() {
    if (this.props.loading) return <Loading />;
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>First Name</Label>
              <Input
                name="first_name"
                value={this.state.user.first_name}
                onChange={event => this.handleChange(event)}
              />
            </Item>
            <Item>
              <Label>Last Name</Label>
              <Input
                name="last_name"
                value={this.state.user.last_name}
                onChange={event => this.handleChange(event)}
              />
            </Item>
            <Item>
              <Label>Email</Label>
              <Input
                name="email"
                value={this.state.user.email}
                onChange={event => this.handleChange(event)}
              />
            </Item>
            <Item>
              <Label>Phone Number</Label>
              <Input
                name="number"
                value={this.state.number}
                onChange={event => this.handleChange(event)}
              />
            </Item>
            <Item>
              <Label>Bio</Label>
              <Input
                name="bio"
                value={this.state.bio}
                onChange={event => this.handleChange(event)}
              />
            </Item>
            <Button bordered danger onPress={e => this.handleSubmit(e)}>
              <Text>Submit</Text>
            </Button>
          </Form>
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
  editProfile: newProfile => dispatch(editProfile(newProfile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
