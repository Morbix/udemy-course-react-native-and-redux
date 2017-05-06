import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header
          title='Authentication'
          backgroundColor='#FBBB3D'
          titleColor='#524B3F' />
        <Text>An App!</Text>
      </View>
    );
  }
};
