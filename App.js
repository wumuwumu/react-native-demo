import AppContainer from "./src/AppNavigator.js";
import AppStockNavigator from "./src/navigators/AppStockNavigator";
import React from "react";
import SplashScreen from "react-native-splash-screen";

import { Provider } from "react-redux";
import store from "./src/redux/store";

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <AppStockNavigator />
      </Provider>
    );
  }
}
