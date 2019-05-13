import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Page2 extends Component {
  render() {
    return (
      <View>
        <Text>page2</Text>
        <Button
          title="跳转PageForm1"
          onPress={() => {
            this.props.navigation.navigate("PageForm1");
          }}
        />
      </View>
    );
  }
}
