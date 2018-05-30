import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Button } from 'react-native';
import {RecommendedStrains } from '../Common'

export class Recommendations extends React.Component {
  static navigationOptions = {
    title: 'Recommendations',
    headerStyle: {
      backgroundColor: '#0d1329',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };
  render() {
    const recommendedStrains = this.props.navigation.getParam('recommendedStrains', [])
    console.log(recommendedStrains)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Top Strains Are As Follows!</Text>
        <Text style={styles.title}>{JSON.stringify(recommendedStrains)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d1329',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    color: '#fff'
  }

});
