import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';
import App from '../components/app';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

class ProductList extends Component {
   constructor(props) {
    super(props);
    this.state = {
        products: [],
        logout: false
    };
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.setState({logout: true});
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
    // console.log('State', this.state);
    if(this.state.logout == false) {
      return (
        <View>
          <TouchableOpacity onPress={this.logout}>
            <Text>
              Logout
            </Text>
          </TouchableOpacity>
          <ScrollView style={{flex: 1}}>
            {this.renderLst()}
          </ScrollView>
        </View>
      )
    } else {
      return (
        <App store={createStoreWithMiddleware(reducers)}/>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductList);
