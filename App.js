import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './Components/Home'
import {Preferences} from './Components/Preferences'
import {Recommendations} from './Components/Recommendations'
import {Splash, Login, Signup} from './Components/Splash'
import { createStackNavigator, createSwitchNavigator} from 'react-navigation'

const AppStack =  createStackNavigator(
  {
    Home: { screen: Home },
    Preferences: { screen: Preferences },
    Recommendations: { screen: Recommendations },
  },
  {
    initialRouteName: 'Home'
  }
);



const RootStack = createSwitchNavigator(
  {
    AppStack: AppStack
  },
  {
    initialRouteName: 'AppStack'
  }
)

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
