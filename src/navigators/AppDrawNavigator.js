import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Stock from "./AppStockNavigator";
import Page1 from "../page/Page1";
import AppStockNavigator from "./AppStockNavigator";
import AppBottomTabNavigator from "./AppBottomTabNavigator";

export const appDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppStockNavigator
    }
  },
  {
    drawerPosition: "left" // 抽屉在左边还是右边
  }
);

export default appDrawerNavigator;
