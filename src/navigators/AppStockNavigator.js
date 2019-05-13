import WelcomePage from "../page/WelcomePage";
import MainTab from "./AppBottomTabNavigator";
import Drawer from "./AppDrawNavigator";
import { createStackNavigator, createAppContainer } from "react-navigation";
import PageForm1 from '../page/PageForm1'
const appStockNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTab
    },
    WelcomePage: {
      screen: WelcomePage
    },
    PageForm1: {
      screen: PageForm1
    },
  },
  {
    initialRouteName: "Main"
  }
);

export default appStockNavigator;
