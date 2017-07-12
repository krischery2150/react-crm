import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { MKTextField, MKColor, MKButton } from "react-native-material-kit";


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
  }
});

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onButtonPress() {
    console.log('I am being Pressed');
  }

  render() {
    const { form, container, welcome, fieldStyles, logInButtonArea, errorMessage } = styles;
    return (
      <View style={container}>
        <Text style={welcome}>
          Welcome to 2150-CRM!
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
          <LoginButton onPress={ this.onButtonPress.bind(this) } />
        </View>
      </View>
    );
  }
}



