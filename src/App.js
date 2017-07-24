import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'firebase'
import Login from './Login'

export default class App extends Component {
  componentWillMount(){
      firebase.initializeApp({
      apiKey: "AIzaSyAaAWRN7G-GqcKYIS4RpdW0OAp2qqa5kDI",
      authDomain: "crm-2150.firebaseapp.com",
      databaseURL: "https://crm-2150.firebaseio.com",
      projectId: "crm-2150",
      storageBucket: "crm-2150.appspot.com",
      messagingSenderId: "932823590540"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

