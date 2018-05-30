import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './Components/Home'
import {Preferences} from './Components/Preferences'
import {Recommendations} from './Components/Recommendations'
import { createStackNavigator} from 'react-navigation'

const RootStack =  createStackNavigator(
  {
    Home: { screen: Home },
    Preferences: { screen: Preferences },
    Recommendations: { screen: Recommendations },
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1329',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
