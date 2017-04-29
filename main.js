import Expo from 'expo';
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
	return (
		<View>
			<Header headerText="Albums!"/>
			<AlbumList />
		</View>
	);
};

Expo.registerRootComponent(App);
