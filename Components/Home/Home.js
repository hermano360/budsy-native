import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { observer, inject } from 'mobx-react'
import {baseURL} from '../Common/baseURL'
import request from 'superagent'

export const Home = inject("buzzwords")(observer(
  class Home extends React.Component {
    
    getBuzzwordList = () => {
      request.get(`${baseURL}/buzzwords/`).set('Content-Type', 'application/json').then(res => {
        const buzzwords = res.body.data.filter(group => group.category !== 'negatives')
        const flavor = buzzwords.filter(buzzword => buzzword.category === 'flavor').map(buzzword => buzzword.words)[0]
        const effects = buzzwords.filter(buzzword => buzzword.category === 'effects').map(buzzword => buzzword.words)[0]

        this.props.buzzwords.flavor = flavor
        this.props.buzzwords.effects = effects
      }).catch(err => console.log(err))
    }


    componentDidMount() {
      this.getBuzzwordList()
    }

    render() {
      return (
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
          />
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Preferences')
          }}>
            <Image
              style={styles.button}
              source={require("../../assets/images/begin_button.png")}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
))


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d1329',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo : {
    width: 200,
    height: 200
  },
  button : {
    width: 300,
    height: 300,
    marginTop: 20
  },
  sidebarContainer: {
    justifyContent: 'flex-start',
  },
  sidebarButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 30
  },
  sidebarIcon: {
    fontSize: 35,
    textAlign: 'center',
  }

});
