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
    buzzwords: []
  }

  render() {
    const {selected} = this.state
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text>+++</Text>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Preferences')}>
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
