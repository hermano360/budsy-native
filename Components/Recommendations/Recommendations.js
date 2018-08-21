import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Button,ScrollView, ImageBackground } from 'react-native';
import {RecommendedStrains, SwiperRec, BudsyButton, RecDeck } from '../Common'
import Swiper from 'react-native-deck-swiper'
import { observer, inject } from 'mobx-react'

export const Recommendations = inject("buzzwords")(observer(
  class Recommendations extends React.Component {

  renderCard = (rec, i, forceSwipe, selected) => {
    return (
      <RecommendedStrains
        key={rec.name}
        name={rec.name}
        order={i+1}
        category={rec.category}
        symbol={rec.symbol}
        rating={rec.rating}
        url={rec.url}
        forceSwipe={forceSwipe}
        selected={selected}
      />
    )
  }
  resetSelection = () => {
    this.props.buzzwords.selected.flavor = []
    this.props.buzzwords.selected.effects = []
    this.props.buzzwords.count = {
      flavor: 6,
      effects: 6
    }
    this.props.buzzwords.flavor = [...this.props.buzzwords.flavor].sort((a,b)=> Math.random() > .5)
    this.props.buzzwords.effects = [...this.props.buzzwords.effects].sort((a,b)=> Math.random() > .5)
    this.props.navigation.navigate('Preferences')
  }

  render() {
    const {recommendations} = this.props.buzzwords
    return (
      <ImageBackground
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
      >
        <View style={styles.container}>
          <RecDeck
            data={recommendations}
            renderCard={this.renderCard}
            resetSelection={this.resetSelection}
          />
        </View>
        <View style={styles.tryAgainContainer}>
          <BudsyButton text="Try Again?" onPress={this.resetSelection} />
        </View>
      </ImageBackground>
    );
  }
}))

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1
  },
  logo: {
    backgroundColor: '#0d1329',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  title: {
    color: '#fff'
  },
  scroll: {
    height: '70%',
    backgroundColor:'rgba(13, 19, 41, .7)',
  },
  tryAgainContainer: {
    paddingLeft: '15%',
    paddingRight: '15%',
    width: '100%'

  }

});
