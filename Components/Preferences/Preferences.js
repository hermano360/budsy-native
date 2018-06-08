import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import {SelectOptions, ContinueButton} from '../Common'
import request from 'superagent'

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
    selected: [],
    buzzwords: [],
    recommended: []
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
    // request
    //   .post('http://99211aba.ngrok.io/strains/')
    //   .set('Content-Type', 'application/json')
    //   .send({data: selectedBuzzwords})
    //   .then(res => {
    //     this.setState({recommended: res.body})
    //     this.props.navigation.navigate('Recommendations', {recommendedStrains: ["Early Miss","Tangerine Sunrise","Sour Chocolate","Puna Buddaz","Pink Cookies"], recommended: res.body})
    //   })
    //   .catch(err => console.log(err))
    //
    //
    let sampleResponse = [
  {
      "name": "Gorkle",
      "url": "gorkle",
      "category": "sativa",
      "effects": [
          "aroused",
          "creative",
          "focused",
          "happy",
          "relaxed"
      ],
      "flavor": [
          "sweet"
      ],
      "symbol": "Gor",
      "rating": 5,
      "totalScore": 29
  },
  {
      "name": "ʻAlenuihāhā",
      "url": "alenuihaha",
      "category": "hybrid",
      "effects": [
          "aroused",
          "creative",
          "energetic",
          "euphoric",
          "happy"
      ],
      "flavor": [
          "sweet",
          "citrus",
          "tropical",
          "pineapple",
          "flowery"
      ],
      "symbol": "Ale",
      "rating": 5,
      "totalScore": 29
  },
  {
      "name": "Moloka’i Purpz",
      "url": "molokai-purpz",
      "category": "indica",
      "effects": [
          "aroused",
          "creative",
          "euphoric",
          "relaxed",
          "sleepy"
      ],
      "flavor": [
          "sweet",
          "berry",
          "grape",
          "plum",
          "flowery"
      ],
      "symbol": "Mol",
      "rating": 5,
      "totalScore": 29
  },
  {
      "name": "Clementine’s Terpentine",
      "url": "clementines-terpentine",
      "category": "hybrid",
      "effects": [
          "aroused",
          "creative",
          "focused",
          "happy",
          "uplifted"
      ],
      "flavor": [
          "sweet",
          "earthy",
          "pine"
      ],
      "symbol": "Ctp",
      "rating": 5,
      "totalScore": 29
  },
  {
      "name": "Chem Jack",
      "url": "chem-jack",
      "category": "hybrid",
      "effects": [
          "aroused",
          "creative",
          "happy",
          "talkative",
          "uplifted"
      ],
      "flavor": [
          "sweet",
          "flowery",
          "earthy",
          "pine",
          "nutty"
      ],
      "symbol": "Cjk",
      "rating": 5,
      "totalScore": 29
  }
]

    this.props.navigation.navigate('Recommendations', {recommendedStrains: ["Early Miss","Tangerine Sunrise","Sour Chocolate","Puna Buddaz","Pink Cookies"], recommended: sampleResponse})

  }

  getBuzzwordList = () => {
    request
      .get('http://99211aba.ngrok.io/buzzwords/')
      .set('Content-Type', 'application/json')
      .then(res => {
        this.setState({
          buzzwords : res.body.data.filter(group => group.category !== 'negatives')
        })
      })
      .catch(err => console.log(err))
  }
  resetSelected = () => {
    this.setState({selected: []})
  }
  componentDidMount(){
    this.getBuzzwordList()
    this.resetSelected()
  }
  render() {
    const {navigation} = this.props
    const {selected, buzzwords} = this.state
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
