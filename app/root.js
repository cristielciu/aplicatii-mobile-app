import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Text,
  View
} from 'react-native';


export default class Root extends Component {
  render () {
    return (
      <Provider store={this.props}>
        <View style={{flex: 1}}>
         <Text>Blah blah blah</Text>
        </View>
      </Provider>
    )
  }
}
