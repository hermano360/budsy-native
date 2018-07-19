import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export const BudsyButton = props => (
  <TouchableOpacity
    style={props.filled ? styles.buttonFill : styles.buttonEmpty}
    onPress={() => console.log('touch')}>
    <Text style={styles.continueText}>{props.text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  buttonEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#bababa',
    borderWidth: 2,
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonFill: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ec572',
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  continueText: {
    margin: 20,
    color: '#fff',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  }
});
