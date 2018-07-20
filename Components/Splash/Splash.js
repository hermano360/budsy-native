import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import {BudsyButton} from '../Common'
import request from 'superagent'

export const Splash = props => (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
    />
    <Image
      style={styles.logo}
      source={require('../../assets/images/logo.png')}
    />
    <Text style={styles.slogan}>CANNABIS. YOUR WAY</Text>
    <View style={styles.buttonContainer}>
      <BudsyButton filled text="Sign Up" onPress={() => props.navigation.navigate('Signup')} />
      <BudsyButton text="Login" onPress={() => props.navigation.navigate('Login')} />
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d1329',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '10%',
    paddingBottom: '10%',
    flex: 1
  },
  logo : {
    width: 200,
    height: 200
  },
  slogan: {
    margin: 10,
    color: '#bababa',
    fontSize: 30,
    fontWeight: 'bold'
  },
  button : {
    width: 300,
    height: 300,
    marginTop: 50
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20
  }
});
