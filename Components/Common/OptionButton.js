import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const OptionButton = props => (
  <TouchableOpacity
    style={props.selected ? styles.selected : styles.container}
    onPress={() => props.toggleBuzzword(props.name, props.category)}>
    <Text style={props.selected ? styles.selectedOption : styles.option}>{props.name}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#0d1329',
    borderColor: '#fff',
    borderRadius: 3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '47%',
    height: 50
  },
  selected : {
    marginTop: 10,
    backgroundColor: '#fff',
    borderColor: '#0d1329',
    borderRadius: 3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '47%',
    height: 50
  },
  option : {
    color: '#fff'
  },
  selectedOption : {
    color: '#0d1329'
  }
});
