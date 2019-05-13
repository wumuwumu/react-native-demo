import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Page1 extends Component {
  render() {
    return (
      <View>
        <Text>page1</Text>
        <Button
          title="切换drawer"
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
      </View>
    );
  }
}
