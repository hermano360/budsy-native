import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { observer, inject } from 'mobx-react'
import request from 'superagent'

export const Home = inject("contacts")(observer(
  class Home extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#0d1329',
        height: 0
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
    state = {
      buzzwords: []
    }
    componentDidMount(){
      console.log('great')
    }

    render() {
      console.log(this.props.contacts.all.slice().map(contact => contact.name))
      const {selected} = this.state
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
            this.props.contacts.all[0] = {id: 4, name: 'Tommy', age: 25}
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
