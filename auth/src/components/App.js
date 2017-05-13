import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection } from './common';
import LoginForm from './LoginForm';

export default class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    this.initializeFirebase();
  }

  initializeFirebase() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDu-pBbCnzg0i8cczs3Tfu-gl--hhpsNJA',
      authDomain: 'authentication-f3909.firebaseapp.com',
      databaseURL: 'https://authentication-f3909.firebaseio.com',
      projectId: 'authentication-f3909',
      storageBucket: 'authentication-f3909.appspot.com',
      messagingSenderId: '116978728352'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header
          title='Authentication'
          backgroundColor='#FBBB3D'
          titleColor='#524B3F' />
        <Button>Log Out</Button>
      </View>
    );
  }
};
