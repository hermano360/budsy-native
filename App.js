import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Provider} from 'mobx-react'
import {Home} from './Components/Home'
import {Preferences} from './Components/Preferences'
import {Recommendations} from './Components/Recommendations'
import {Splash, Login, Signup} from './Components/Splash'
import {createStackNavigator, createSwitchNavigator} from 'react-navigation'
import stores from './stores'

const AppStack = createStackNavigator({
  Home: {
    screen: props => (<Provider buzzwords={stores.buzzwords}>
      <Home {...props}/>
    </Provider>),
    navigationOptions: () => ({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#0d1329',
        height: 0
      },
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })
  },
  Preferences: {
    screen: props => (<Provider buzzwords={stores.buzzwords}>
      <Preferences {...props}/>
    </Provider>),
    navigationOptions: {
      title: 'Preferences',
      headerStyle: {
        backgroundColor: '#0d1329'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  },
  Recommendations: {
    screen: props => (<Provider buzzwords={stores.buzzwords}>
      <Recommendations {...props}/>
    </Provider>),
    navigationOptions: {
      title: 'Recommendations',
      headerStyle: {
        backgroundColor: '#0d1329'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
}, {initialRouteName: 'Home'});

const RootStack = createSwitchNavigator({
  AppStack: AppStack
}, {initialRouteName: 'AppStack'})

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1329',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
