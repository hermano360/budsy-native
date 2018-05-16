import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import request from 'superagent'

export class Home extends React.Component {
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
    buzzwords: [],
    selected: []
  }
  getBuzzwordList = () => {
    request
      .get('https://budsydev.mybluemix.net/open_recommendation/buzzwords/')
      .set('Content-Type', 'application/json')
      .then(res => {
        this.setState({
          buzzwords : res.body.data.filter(group => group.category !== 'negatives')
        })
      })
      .catch(err => console.log(err))
  }
  componentDidMount(){
    this.getBuzzwordList()
  }
  toggleBuzzword = (buzzword) => {
    this.setState(({selected})=>{
      if(selected.includes(buzzword)){
        return {
          selected : selected.filter(word => word !== buzzword)
        }
      } else {
        return {
          selected : selected.push(buzzword)
        }
      }
    })
  }
  render() {
    const {buzzwords, selected} = this.state
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Preferences', {buzzwords, selected, toggleBuzzword: this.toggleBuzzword})}>
          <Image
            style={styles.button}
            source={require('../../assets/images/begin_button.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

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
    marginTop: 50
  },

});
