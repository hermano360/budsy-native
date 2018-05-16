import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import {SelectOptions} from '../Common'

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
    ),
  };
  extractBuzzwords = (buzzwords, selected) => {
    return buzzwords.map(group => (
      <SelectOptions
        key={group.category}
        title={group.category}
        subtitle={'Select Your Top Three'}
        buzzwords={group.words}
        selected={selected}
      />
      )
    )
  }
  render() {
    const {navigation} = this.props
    const buzzwords = navigation.getParam('buzzwords', [])
    const selected = navigation.getParam('selected', [])
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          {this.extractBuzzwords(buzzwords, selected)}
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
