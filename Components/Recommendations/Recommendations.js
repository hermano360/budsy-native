import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Button,ScrollView } from 'react-native';
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
  generateRecommendationCards = (recommendations) => {
    return (
      <ScrollView horizontal={true} style={styles.scroll}>
        {recommendations.map((rec,i) => {
          return (
            <RecommendedStrains
              key={rec.name}
              name={rec.name}
              order={i+1}
              category={rec.category}
              symbol={rec.symbol}
              rating={rec.rating}
              url={rec.url}
            />
          )
        })}
      </ScrollView>
    )
  }


  render() {
    const recommendedStrains = this.props.navigation.getParam('recommendedStrains', [])
    const recommended = this.props.navigation.getParam('recommended', [])

    return (
      <View style={styles.container}>
        {this.generateRecommendationCards(recommended)}
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
  },
  scroll: {
    flex: 1,
    backgroundColor: '#0d1329',
  }

});
