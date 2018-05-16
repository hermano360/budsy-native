import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import {OptionButton} from './OptionButton'

const listOfOptions = (buzzwords, selected) => {
  return buzzwords.map(buzzword => {
    return <OptionButton key={buzzword} selected={selected.includes(buzzword)} name={buzzword} />
  })
}


export const SelectOptions = props => (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title.toUpperCase()}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      <View style={styles.options}>
        {listOfOptions(props.buzzwords, props.selected)}
      </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1329',
    width: '100%',
  },
  options: {
    flex: 1,
    backgroundColor: '#0d1329',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10
  },
  title: {
    width: '100%',
    alignItems: 'flex-start',
    margin: 10,
    marginLeft: 20,
    color: '#fff',
    fontSize: 24
  },
  subtitle: {
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 20,
    color: '#9da1b1'
  },
  logo : {
    width: 150,
    height: 150
  }
});
