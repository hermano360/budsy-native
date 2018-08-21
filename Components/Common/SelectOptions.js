import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import {OptionButton} from './OptionButton'

export class SelectOptions extends Component {

  listOfOptions = (buzzwords, selected) => {
    const length = this.props.count
    const {toggleBuzzword, title} = this.props
    return buzzwords.slice(0,length).map(buzzword => {
      return (
        <OptionButton
          key={buzzword}
          selected={selected.includes(buzzword)}
          name={buzzword}
          category={title}
          toggleBuzzword={toggleBuzzword}
        />)
    })
  }

  render(){
    const {title, subtitle, buzzwords, selected, addBuzzwordCount} = this.props
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.options}>
            {this.listOfOptions(buzzwords, selected)}
          </View>
          <TouchableOpacity style={styles.addBuzzword} onPress={addBuzzwordCount}>
            <Text style={styles.add}>See More Buzzwords</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

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
  },
  addBuzzword : {
    backgroundColor: '#1a1f33',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  add : {
    margin: 20,
    color: '#fff',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
