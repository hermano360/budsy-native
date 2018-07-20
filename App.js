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

const AuthStack =  createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        headerStyle: {
          backgroundColor: '#fff'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        title: 'Signup',
        headerStyle: {
          backgroundColor: '#0d1329'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }},
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#0d1329',
          height: 0
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
  },
  {
    initialRouteName: 'Splash'
  }
);

const RootStack = createSwitchNavigator(
  {
    AppStack: AppStack,
    AuthStack: AuthStack
  },
  {
    initialRouteName: 'AuthStack'
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
