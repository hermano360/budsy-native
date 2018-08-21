import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

const determineIfContinue = ([flavor, effects]) => {
  return flavor.length > 0 && effects.length > 0
}

const handleBuzzwordSubmit = (selected, submitBuzzwords) => {
  if(determineIfContinue(selected)) submitBuzzwords()
  else console.log('Please Select At Least 4 Total Buzzwords')
}

export const ContinueButton = props => {
  const continueAllowed = determineIfContinue(props.selected)
  return (
  <TouchableOpacity
    style={continueAllowed ? styles.continueEnabled : styles.continueDisabled}
    onPress={() => handleBuzzwordSubmit(props.selected, props.submitBuzzwords)}>
    <Text style={styles.continueText}>{props.loading ? 'Please Wait' : 'Go To Recommendation'}</Text>
  </TouchableOpacity>
)}

const styles = StyleSheet.create({
  continueDisabled: {
    backgroundColor: '#bababa',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  continueEnabled: {
    backgroundColor: '#6ec572',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
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
