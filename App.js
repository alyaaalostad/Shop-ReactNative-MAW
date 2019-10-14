import React from "react";
import store from "./redux";
import { Provider } from "react-redux";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

//components
import Loading from "./components/Loading";
import ItemsList from "./components/ItemsList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    console.disableYellowBox = true;
    if (!this.state.isReady) {
      return <Loading />;
    }
    return (
      <Provider store={store}>
        <ItemsList />
      </Provider>
    );
  }
}
