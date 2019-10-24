import { createStackNavigator } from "react-navigation-stack";

//components
import ItemDetail from "../components/ItemDetail";
import ItemList from "../components/ItemsList";
import SignupForm from "../components/SignupForm";
import ItemCart from "../components/ItemCart";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";

const StackNav = createStackNavigator(
  {
    SingupScreen: SignupForm,
    ListScreen: ItemList,
    DetailScreen: ItemDetail,
    CartScreen: ItemCart,
    ProfileScreen: Profile,
    EditProfileScreen: EditProfile
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#324917",
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
