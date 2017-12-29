import { StackNavigator } from "react-navigation";
import LoginScreen from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        // headerTitle: "Home",
      },
    },
    LaunchScreen: { screen: LaunchScreen },
  },
  {
    initialRouteName: "LoginScreen",
  }
);

export default PrimaryNav;
