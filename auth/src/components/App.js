import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './common';
import LoginForm from './LoginForm';

export default class App extends Component {
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
  }

  render() {
    return (
      <View>
        <Header
          title='Authentication'
          backgroundColor='#FBBB3D'
          titleColor='#524B3F' />
        <LoginForm />
      </View>
    );
  }
};
