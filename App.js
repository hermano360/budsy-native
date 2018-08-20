import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react'
import { Home } from './Components/Home'
import {Preferences} from './Components/Preferences'
import {Recommendations} from './Components/Recommendations'
import {Splash, Login, Signup} from './Components/Splash'
import { createStackNavigator, createSwitchNavigator} from 'react-navigation'
import stores from './stores'


const wrapComponent = (Component, props) => {
  return (
    <Provider contacts={stores.contacts}>
      <Component {...props}/>
    </Provider>
  );
}

const AppStack =  createStackNavigator(
  {
    Home: { screen: props => (
      <Provider contacts={stores.contacts}>
        <Home {...props}/>
      </Provider>
    )},
    Preferences: { screen: props => (
      <Provider buzzwords={stores.buzzwords}>
        <Preferences {...props}/>
      </Provider>
    ) },
    Recommendations: { screen : props => (
      <Provider contacts={stores.contacts}>
        <Recommendations {...props}/>
      </Provider>
    ) },
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
