import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={style.container}>
      {props.children}
    </View>
  );
};

const style = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export default CardSection;
