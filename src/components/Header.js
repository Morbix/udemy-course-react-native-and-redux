import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
	const { textStyle, viewStyle } = Styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>Albums!</Text>
		</View>
	);
};

const Styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15, 
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
	},
	textStyle: {
		fontSize: 20,
	}
}

export default Header;