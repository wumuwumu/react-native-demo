import React, { Component } from "react";
import { Text, Button, StyleSheet, View } from "react-native";
import { MapView } from "react-native-amap3d";
export default class AMap extends Component {
  render() {
    return (
      <MapView
        style={StyleSheet.absoluteFill}
        mapType={"satellite"}
        coordinate={{
          latitude: 39.91095,
          longitude: 116.37296
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  AMap: {
    width: "100",
    height: 100
  }
});
