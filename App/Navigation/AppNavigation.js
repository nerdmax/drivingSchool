import { StackNavigator } from "react-navigation";
import LoginScreen from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import MainContentsNav from './MainContentsNavigation';

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
    LaunchScreen: { screen: MainContentsNav },
  },
  {
    initialRouteName: "LoginScreen",
  }
);

export default PrimaryNav;
