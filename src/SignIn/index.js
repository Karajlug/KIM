import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class SignIn extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Text style={{color: 'white', fontSize: 35, margin: 25}}>SignIn</Text>
      </View>
    );
  }
}

export default connect(state => state)(SignIn)
