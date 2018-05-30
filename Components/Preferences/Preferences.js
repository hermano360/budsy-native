import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import {SelectOptions, ContinueButton} from '../Common'

export class Preferences extends React.Component {
  static navigationOptions = {
    title: 'Preferences',
    headerStyle: {
      backgroundColor: '#0d1329',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
        style={{marginRight: 20}}
      />
    )
  };
  state = {
    selected: []
  }
  extractBuzzwords = (buzzwords, selected, toggleBuzzword) => {
    return buzzwords.map(group => (
      <SelectOptions
        key={group.category}
        title={group.category}
        subtitle={'Select Your Top Three'}
        buzzwords={group.words}
        selected={selected}
        toggleBuzzword={toggleBuzzword}
      />
      )
    )
  }
  toggleBuzzword = (buzzword, category) => {
    this.setState(({selected}) => {
      return {
        selected : selected.map(words => words.word).includes(buzzword) ? selected.filter(selection => selection.word !== buzzword) : [...selected, {word: buzzword, category}]
      }
    })
  }
  submitBuzzwords = (selectedBuzzwords) => {
    //make api call here to /open_recommendation/recommendation/
    console.log({data: selectedBuzzwords})
    this.props.navigation.navigate('Recommendations', {recommendedStrains: ["Early Miss","Tangerine Sunrise","Sour Chocolate","Puna Buddaz","Pink Cookies"]})
  }
  render() {
    const {navigation} = this.props
    const buzzwords = navigation.getParam('buzzwords', [])
    const {selected} = this.state
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          {this.extractBuzzwords(buzzwords, selected, this.toggleBuzzword)}
          <ContinueButton selected={selected} submitBuzzwords={this.submitBuzzwords}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#0d1329',
  },
  container: {
    flex: 1,
    backgroundColor: '#0d1329',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo : {
    width: 150,
    height: 150
  }
});
