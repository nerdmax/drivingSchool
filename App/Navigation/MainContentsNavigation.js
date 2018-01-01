import { TabNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

const MainContentsNav = TabNavigator({
  Home: {
    screen: LaunchScreen,
  },
  Notifications: {
    screen: LaunchScreen,
  },
});

export default MainContentsNav;
