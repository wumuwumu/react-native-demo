import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export default class PageForm1 extends Component {
  render() {
    return (
      <View>
        <Text>page2</Text>
        <Button
          title="跳转Page3"
          onPress={() => {
            this.props.navigation.navigate("Page3");
          }}
        />
      </View>
    );
  }
}
