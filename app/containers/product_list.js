import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

class ProductList extends Component {
   constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.products.map((product) => {
      return (
        <View key={product.name} style={{alignItems: 'center'}}>
        <Text style={{
          color: '#8c8c8c',
          fontWeight: 'bold',
          fontSize: 20,
        }}>{product.name}</Text>
        <Image
         style={{width: 100 , height: 100}}
          source={{uri: product.image}}
        />
        <Text>{product.description}</Text>
        <Text style={{color: 'red'}}>{product.price}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        {this.renderList()}
      </ScrollView>
    )
  }
}

// export default ProductList;
function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(ProductList);
