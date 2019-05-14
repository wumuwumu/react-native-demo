import React from "react";
import { View } from "react-native";
import WelcomePage from "../page/WelcomePage";
import MainTab from "./AppBottomTabNavigator";
import Drawer from "./AppDrawNavigator";
import { createStackNavigator, createAppContainer } from "react-navigation";
import PageForm1 from "../page/PageForm1";
import AMapPage from "../page/AMap";
import CameraPage from "../page/CameraPage";
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
    AMap: {
      screen: AMapPage,
      navigationOptions: ({ navigation }) => ({
        title: "高德地图",
        headerTitleStyle: { flex: 1, textAlign: "center" },
        headerRight: <View />
      })
    },
    CameraPage: {
      screen: CameraPage,
      navigationOptions: {
        title: "摄像头"
      }
    }
  },
  {
    initialRouteName: "Main"
  }
);

export default appStockNavigator;
