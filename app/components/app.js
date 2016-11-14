import React, { Component } from 'react';
import ProductList from '../containers/product_list';
import {
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);


export default class App extends Component {
  render () {
    return (
      <View style={{backgroundColor: 'powderblue', flex: 1}}>
        <ProductList store={createStoreWithMiddleware(reducers)}/>
      </View>
    )
  }
}
