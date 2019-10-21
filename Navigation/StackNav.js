import { createStackNavigator } from "react-navigation-stack";

//components
import ItemDetail from "../components/ItemDetail";
import ItemList from "../components/ItemsList";
import SignupForm from "../components/SignupForm";
import ItemCart from "../components/ItemCart";
const StackNav = createStackNavigator(
  {
    SingupScreen: SignupForm,
    ListScreen: ItemList,
    DetailScreen: ItemDetail,
    CartScreen: ItemCart
    // SearchScreen: ITemSearch
  },
  {
    initialRouteName: "SingupScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#489c63",
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
