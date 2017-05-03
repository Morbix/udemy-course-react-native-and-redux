import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = Styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const Styles = {
	viewStyle: {
		backgroundColor: '#007aff',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
		position: 'relative',
		zIndex: 1
	},
	textStyle: {
		fontSize: 20,
		color: 'white'
	}
}

export default Header;
