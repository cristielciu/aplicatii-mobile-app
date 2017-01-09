import React, { Component } from 'react';
import ProductList from '../containers/product_list';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';
import { login } from '../actions/login';
import { loginAndRegister } from '../actions/loginAndRegister';
const createStoreWithMiddleware = applyMiddleware()(createStore);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      register: false,
      username: '',
      password: '',
      error: '',
      email: '',
      name: ''
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.register_and_login = this.register_and_login.bind(this);
    this.back = this.back.bind(this);
  }

  login(){
    let loginResp = this.props.login(this.state);
    loginResp.payload.then(
        (res) => {
          if(res.data !== null) {
            this.setState({loggedIn: true});
          }
          else {
            this.setState({username: ''});
            this.setState({password: ''});
            this.setState({error: 'Username or password invalid, try again!'});
          }
        }
      );
    // this.setState({loggedIn: true});
  }

  back() {
    this.setState({register: false});
  }

  register(){
    this.setState({register: true});
  }

  register_and_login(){
    let username = this.state.username;
    let password = this.state.password;
    let email = this.state.email;
    let name = this.state.name;
    let err = '';
    if(username === '') {
      err += ' Username invalid! ';
    }
    if(password === '') {
      err += ' Password invalid! ';
    }
    if(email === '') {
      err += ' Email invalid! ';
    }
    if(name === '') {
      err += ' Name invalid! ';
    }

    if(err == '') {
      this.setState({error: ''});
      let loginResp = this.props.loginAndRegister(this.state);
      loginResp.payload.then(
          (res) => {
            if(res.data !== null) {
              this.setState({loggedIn: true});
            }
            else {
              this.setState({error: 'User or email already exist.'});
            }
          }
        );
    }
    else {
      this.setState({error: err});
    }
  }
  render () {
    if(this.state.loggedIn) {
      return (
        <View style={{backgroundColor: 'powderblue', flex: 1}}>
          <ProductList store={createStoreWithMiddleware(reducers)}/>
        </View>
      );
    }
    else if (this.state.register === true){
      return (
        <View style={{backgroundColor: 'powderblue', flex: 1}}>
        <Text style={{color: 'red'}}>{this.state.error}</Text>
        <Text>Username</Text>
        <TextInput onChangeText={(text) => this.setState({...this.state, username: text})} value={this.state.username}/>
        <Text>Password</Text>
        <TextInput onChangeText={(text) => this.setState({...this.state, password: text})} value={this.state.password}/>
        <Text>Email</Text>
        <TextInput onChangeText={(text) => this.setState({...this.state, email: text})} value={this.state.email}/>
        <Text>Name</Text>
        <TextInput onChangeText={(text) => this.setState({...this.state, name: text})} value={this.state.name}/>
        <TouchableOpacity onPress={this.register_and_login}>
          <Text>Register & Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.back}>
          <Text>Back to login page</Text>
        </TouchableOpacity>
      </View>
      )
    }
    else {
      return (
        <View style={{backgroundColor: 'powderblue', flex: 1}}>
        <Text style={{color: 'red'}}>{this.state.error}</Text>
        <Text>Username</Text>
        <TextInput onChangeText={(text) => this.setState({...this.state, username: text})} value={this.state.username}/>
        <Text>Password</Text>
        <TextInput onChangeText={(text) => this.setState({...this.state, password: text})} value={this.state.password}/>
        <TouchableOpacity onPress={this.login}>
          <Image
            style={{width: 200, height: 50}}
            source={require('../login.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.register}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ login }, dispatch);
  return dispatch(login(username,password),loginAndRegister(username,password,email,name));
}

export default connect(null, { login, loginAndRegister })(App);
