AppRegistry.registerComponent('MyProject', () => MyProject);

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

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
      <Text style={styles.red, styles.bigblue}>{display}</Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Blink text={'Hello ' + this.props.name}/>
    );
  }
}

class MyProject extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', backgroundColor: 'powderblue'}}>
          <Greeting name='Ielciu' />
          <Greeting name='Cristian'/>
          <Greeting name='Vlad' />
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue', flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 1, height: 50 , backgroundColor: 'powderblue'}} />
          <View style={{flex: 1, height: 50, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center',}} >
            <Text style={{color: '#EBF5FB'}}>
              Meniu
            </Text>
          </View>
          <View style={{flex: 1, height: 50 ,backgroundColor: 'powderblue'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
