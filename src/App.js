import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import SuperheroesList from './components/superheroesList';
import TopBarLis from './components/TabBarList';
import configureStore from './configureStore'

let store = configureStore()

const App = () => (
  <Provider store={store}>
     <TopBarLis/>
  </Provider>
)

export default App;