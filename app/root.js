import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './components/app';
import {
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class Root extends Component {
  render () {
    return (
      <Provider store={this.props}>
        <View style={{flex: 1}}>
         <App store={createStoreWithMiddleware(reducers)}/>
        </View>
      </Provider>
    )
  }
}
