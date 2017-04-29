import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    const { textStyle } = Styles;
    return (
        <Text style={textStyle}>Albums!</Text>
    );
};

const Styles = {
    textStyle: {
        fontSize: 20
    }
}

export default Header;