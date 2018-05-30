import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

determineIfContinue = (selectedStrains) => {
  return selectedStrains.length >= 4
}

handleBuzzwordSubmit = (selectedBuzzwords, submitBuzzwords) => {
  if(selectedBuzzwords.length < 4) console.log('Please Select At Least 4 Total Buzzwords')
  else {
    console.log(selectedBuzzwords)
    submitBuzzwords(selectedBuzzwords)
  }
}
export const ContinueButton = props => (
  <TouchableOpacity
    style={determineIfContinue(props.selected) ? styles.continueEnabled : styles.continueDisabled}
    onPress={() => handleBuzzwordSubmit(props.selected, props.submitBuzzwords)}>
    <Text style={styles.continueText}>Go To Recommendation</Text>
  </TouchableOpacity>
)

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
