import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers';
import SuperheroesList from './components/superheroesList';

const App = () => (
  <Provider store={createStore(Reducers)}>
    <View>
      <SuperheroesList/>
    </View>
  </Provider>
)

export default App;

//export default class App extends Component { render() {return(<View/>)}}