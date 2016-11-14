import React, { Component } from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';
import { connect } from 'react-redux';

class ProductList extends Component {
   constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  productsList() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(this.props.products);
  }

  render() {
    return (
      // <View style={{flex: 1}}>
      //   <ListView
      //     dataSource={this.state.dataSource}
      //     renderRow={(data) => <View><Text>{data}</Text></View>}
      //   />
      // </View>
      <Text>Daa</Text>
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
