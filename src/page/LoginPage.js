import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

export default class LoginPage extends Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    return (
      <View>
        <Text>login</Text>
        <Button
          title="登录"
          onPress={() => {
            // this.props.getUser();
            let actions = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: "Main",
                  params: {
                    titleHeader: "首页"
                  }
                })
              ]
            });
            this.props.navigation.dispatch(actions);
          }}
        />
      </View>
    );
  }
}
