import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Button,ScrollView, ImageBackground } from 'react-native';
import {RecommendedStrains, SwiperRec, BudsyButton, RecDeck } from '../Common'
import Swiper from 'react-native-deck-swiper'

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
  renderNoMoreCards = () => {
    return (
      <View>
        <Text>No Mas</Text>
      </View>
    )
  }

  render() {
    const recommended = this.props.navigation.getParam('recommended', [])
    const selected = this.props.navigation.getParam('selected', [])
    return (
      <ImageBackground
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
      >
        <View style={styles.container}>
          <RecDeck
            data={recommended}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
          />
        </View>
        <View style={styles.tryAgainContainer}>
          <BudsyButton text="Try Again?" onPress={() => this.props.navigation.navigate('Preferences', {refresh: true})} />
        </View>
      </ImageBackground>
    );
  }
}

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
