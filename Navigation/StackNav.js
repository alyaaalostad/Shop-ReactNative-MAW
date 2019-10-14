import { createStackNavigator } from "react-navigation-stack";
import ItemDetail from "../components/ItemDetail";
import ItemList from "../components/ItemsList";

const StackNav = createStackNavigator(
  {
    ListScreen: ItemList,
    DetailScreen: ItemDetail
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100).",
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
