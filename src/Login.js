import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { MKTextField, MKColor, MKButton } from "react-native-material-kit";
import Loader from './Loader';
import firebase from "firebase"

const LoginButton = MKButton.coloredButton()
      .withText('LOGIN')
      .build();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  form: {
    paddingBottom: 10,
    width: 200,
  },

  fieldStyles:{
    height: 40,
    width: 200,
    color: MKColor.Orange,
  },

  logInButtonArea: {
    marginTop: 20
  },

  errorMessage: {
    marginTop: 15,
    fontSize: 15,
    color: 'red',
    alignSelf: 'center'
  }
});

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress(){
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword( email, password )
      .then(this.onAuthSuccess.bind(this))
      .catch( () => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
         .then(this.onAuthSuccess.bind(this))
         .catch(this.onAuthFailed.bind(this))
      });
  }

  onAuthSuccess(){
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onAuthFailed(){
    this.setState({
      error: ' Authentication Failed',
      loading: false,
    })
  }

  renderLoader() {
    if (this.state.loading) {
      return <Loader size="large"/>
    } else {
      return <LoginButton onPress={this.onButtonPress.bind(this) } />
    }
  }

  render() {
    const { form, container, welcome, fieldStyles, logInButtonArea, errorMessage } = styles;
    return (
      <View style={form}>
        <Text>
         Log In or Create an account
        </Text>
        <MKTextField 
         text={this.state.email}
         onTextChange={email => this.setState({ email })}
         textInputStyle={fieldStyles }
         placeholder={"Enter your email"}
         tintColor={MKColor.Teal}
        />

        <MKTextField 
         text={ this.state.password}
         onTextChange={ password => this.setState({ password })}
         textInputStyle={ fieldStyles }
         placeholder={"Enter your password"}
         tintColor={ MKColor.Teal }
         password= { true }
        />

        <Text style={errorMessage}>
          {this.state.error}
        </Text>

        <View style={ logInButtonArea }>
          {this.renderLoader()}
        </View>
      </View>
    );
  }
}



