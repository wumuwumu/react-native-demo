import React from "react";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AppSwitchNavigator from "./src/navigators/AppSwitchNavigator";

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <AppSwitchNavigator />
      </Provider>
    );
  }
}
