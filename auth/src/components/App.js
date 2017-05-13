import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  Header,
  Button,
  Spinner,
  CardSection
} from './common';
import LoginForm from './LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

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
    switch (this.state.loggedIn) {
      case true:
        return (
          //<CardSection>
            <Button
              onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          //</CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header
          title='Authentication'
          backgroundColor='#FBBB3D'
          titleColor='#524B3F' />
        { this.renderContent() }
      </View>
    );
  }
};
