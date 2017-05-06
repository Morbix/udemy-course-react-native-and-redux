import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
	const {
		title,
		backgroundColor,
		titleColor
	} = props;

	var containerStyles;
	if (backgroundColor == null) {
		containerStyles = [Styles.container, { backgroundColor: '#f8f8f8' }];
	} else {
		containerStyles = [Styles.container, { backgroundColor: backgroundColor }];
	}

	var titleStyles;
	if (titleColor == null) {
		titleStyles = [Styles.title, { color: 'black' }];
	} else {
		titleStyles = [Styles.title, { color: titleColor }];
	}

	return (
		<View style={ containerStyles }>
			<Text style={ titleStyles }>{ title }</Text>
		</View>
	);
};

const Styles = {
	container: {
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
	title: {
		fontSize: 20,
		color: 'white'
	}
}

export { Header };
