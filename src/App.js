import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import TapBarComponent from './components/tabBar.component';
import configureStore from './configureStore'

let store = configureStore()

const App = () => (
  <Provider store={store}>
     <TapBarComponent/>
  </Provider>
)

export default App;