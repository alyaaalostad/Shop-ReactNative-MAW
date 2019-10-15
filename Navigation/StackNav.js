import { createStackNavigator } from "react-navigation-stack";
import ItemDetail from "../components/ItemDetail";
import ItemList from "../components/ItemsList";
import SignupForm from "../components/SignupForm";

const StackNav = createStackNavigator(
  {
    SingupScreen: SignupForm,
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
