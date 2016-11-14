import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './components/app';
import {
  Text,
  View
} from 'react-native';


export default class Root extends Component {
  render () {
    return (
      <Provider store={this.props}>
        <View style={{flex: 1}}>
         <App />
        </View>
      </Provider>
    )
  }
}
