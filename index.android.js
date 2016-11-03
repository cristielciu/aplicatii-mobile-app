AppRegistry.registerComponent('MyProject', () => MyProject);

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, ScrollView, Switch, TouchableNativeFeedback } from 'react-native';

class Input extends Component {
  render() {
    return (
      <View >
        <Text>
          {this.props.fieldName}
        </Text>
        <TextInput
          placeholder="Type here..."
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

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
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  state = {
    SwitchIsOn: false,
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', backgroundColor: 'powderblue'}}>
          <Greeting name='Ielciu' />
          <Greeting name='Cristian'/>
          <Greeting name='Vlad' />
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue', flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={{flex: 1, backgroundColor: 'steelblue', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1, height: 50 , backgroundColor: 'powderblue'}} />
            <View style={{flex: 1, height: 50, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center',}} >
              <Text style={{color: '#EBF5FB'}}>
                Login
              </Text>
            </View>
            <View style={{flex: 1, height: 50 ,backgroundColor: 'powderblue'}} />
          </View>
          <View style={{flex: 6}}>
            <Input fieldName='Username: ' />
            <View>
              <Text>
                Password:
              </Text>
              <TextInput
                placeholder="Type here password"
                onChangeText={(text) => this.setState({text})}
              />
            </View>
            <ScrollView>
              <Text style={{fontSize:16}}>Some terms: </Text>
              <Text style={{fontSize:16}}>Cristi Ielciu''s Terms: </Text>
              <Text style={{fontSize:16}}>11111111111111111111111: </Text>
              <Text style={{fontSize:16}}>22222: </Text>
              <Text style={{fontSize:16}}>333333333 </Text>
              <Text style={{fontSize:16}}>44444444444444 </Text>
              <Text style={{fontSize:16}}>55555555555555555 </Text>
              <Text style={{fontSize:16}}>66666666666666666666 </Text>
              <Text style={{fontSize:16}}>Cristi Ielciu''s Terms8: </Text>
              <Text style={{fontSize:16}}>Cristi Ielciu''s Terms9: </Text>
            </ScrollView>
            <View style={{backgroundColor: 'steelblue', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize:20}}>
                  Login only if you accept the terms
                </Text>
                <Switch
                  onValueChange={(value) => this.setState({SwitchIsOn: value})}
                  style={{marginBottom: 10}}
                  value={this.state.SwitchIsOn} />
            </View>
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={{backgroundColor: 'powderblue'}}>
                <Text style={{textAlign: 'center', fontSize: 25}}>Login</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
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
