import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={ Styles.spinner }>
      <ActivityIndicator size={ size || 'large' } />
    </View>
  );
};

const Styles = {
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  }
}

export { Spinner };
