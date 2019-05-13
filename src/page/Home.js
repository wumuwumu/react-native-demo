import React from "react";
import { View, Text, Button } from "react-native";
import { GET_USER } from "../redux/actions/index";
import { StackActions, NavigationActions } from "react-navigation";

import { connect } from "react-redux";
const mapStateToProps = state => ({
  user: state.user,
  name: state.user.name
});

const mapDispatchToProps = dispatch => ({
  getUser: () =>
    dispatch({
      type: GET_USER
    })
});

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.user.name}</Text>
        <Button
          title="改变"
          onPress={() => {
            // this.props.getUser();
            let actions = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: "Login",
                  params: {
                    titleHeader: "login"
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
export { Home, mapStateToProps };
