import WelcomePage from "../page/WelcomePage";
import Home from "../page/Home";
import Login from "../page/LoginPage";
import MainTab from './AppBottomTabNavigator'
import { createStackNavigator, createAppContainer } from "react-navigation";

const appStockNavigator = createStackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage
    },
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    },
    Main:{
      screen:MainTab
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(appStockNavigator);
