import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../page/LoginPage";
import AppDrawer from "../navigators/AppDrawNavigator";

export const appSwitchNavigation = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    App: {
      screen: AppDrawer
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(appSwitchNavigation);
