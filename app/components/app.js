import React, { Component } from 'react';
import ProductList from '../containers/product_list';
import {
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render () {
    return (
        <ProductList />
    )
  }
}
