import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';

class ProductList extends Component {
   constructor(props) {
    super(props);
    this.state = {
        products: []
    };
  }

  componentDidMount() {
    var self = this;
    this.props.fetchProducts().payload.then((pr) => {
      let products = pr.data;
      return products.map((product) => {
        console.log(product);
        let arr= [product, ...self.state.products];
        console.log('Arr: ', arr);
        self.setState({
          products: [product, ...self.state.products]
        });
      });
    });
}

  renderLst() {
    return this.state.products.map((pr) => {
      console.log('Name', pr.name);
      return (
        <View key={pr.name} style={{alignItems: 'center'}}>
        <Text style={{
          color: '#8c8c8c',
          fontWeight: 'bold',
          fontSize: 20,
        }}>{pr.name}</Text>
        <Image
         style={{width: 100 , height: 100}}
          source={{uri: pr.image}}
        />
        <ScrollView style={{height: 30 }}><Text style={{width: 100 }}>{pr.description}</Text></ScrollView>
        <Text style={{color: 'red'}}>{pr.price}$</Text>
        </View>
      );
    });
  }
  render() {
    console.log('State', this.state);
    return (
      <ScrollView style={{flex: 1}}>
        {this.renderLst()}
      </ScrollView>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductList);
