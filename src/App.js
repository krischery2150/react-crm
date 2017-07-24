import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'firebase';
import Loader from './Loader';
import PeopleList from './PeopleList';

export default class App extends Component {
  state = {
    loggedIn: null,
  }

  componentWillMount(){
      firebase.initializeApp({
      apiKey: "AIzaSyAaAWRN7G-GqcKYIS4RpdW0OAp2qqa5kDI",
      authDomain: "crm-2150.firebaseapp.com",
      databaseURL: "https://crm-2150.firebaseio.com",
      projectId: "crm-2150",
      storageBucket: "crm-2150.appspot.com",
      messagingSenderId: "932823590540"
    });

     firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
     });
  }

  renderInitialView (){
    switch (this.state.loggedIn) {
      case true:
        return <PeopleList />
      case false:
        return <Login />
      default:
        return <Loader size="large" />
    }
  }
  render() {
    return (
      <View style={ styles.container }>
        { this.renderInitialView() }
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

