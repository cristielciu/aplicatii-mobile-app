AppRegistry.registerComponent('MyProject', () => MyProject);

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Blink text={'Hello ' + this.props.name} />
    );
  }
}

class MyProject extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Ielciu ' />
        <Greeting name='Cristian' />
        <Greeting name='Vlad' />
      </View>
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
