import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Header title='Tech Stack'/>
    </Provider>
  );
};

export default App;
