/** @format */

import { AppRegistry } from "react-native";
import app from "./App";
import SplashScreen from 'react-native-splash-screen'
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => app);
