import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import {SelectOptions, ContinueButton} from '../Common'
import request from 'superagent'
import {baseURL} from '../Common/baseURL'

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
    let sampleResponse = [
    {
        "name": "Gooberry",
        "url": "gooberry",
        "category": "indica",
        "effects": [
            "aroused",
            "giggly",
            "happy",
            "relaxed",
            "sleepy"
        ],
        "flavor": [
            "sweet",
            "berry",
            "blueberry",
            "flowery",
            "earthy"
        ],
        "symbol": "Gby",
        "rating": 4.296296296296297,
        "totalScore": 16
    },
    {
        "name": "South Asian Indica",
        "url": "south-asian",
        "category": "indica",
        "effects": [
            "euphoric",
            "giggly",
            "sleepy",
            "talkative",
            "uplifted"
        ],
        "flavor": [
            "sweet"
        ],
        "symbol": "Sai",
        "rating": 4,
        "totalScore": 15
    },
    {
        "name": "Petrolia Headstash",
        "url": "petrolia-headstash",
        "category": "indica",
        "effects": [
            "aroused",
            "euphoric",
            "happy",
            "relaxed",
            "uplifted"
        ],
        "flavor": [
            "sweet",
            "violet",
            "earthy",
            "pungent",
            "woody"
        ],
        "symbol": "Peh",
        "rating": 4.636363636363637,
        "totalScore": 10
    },
    {
        "name": "Schrom",
        "url": "schrom",
        "category": "sativa",
        "effects": [
            "aroused",
            "creative",
            "euphoric",
            "happy",
            "uplifted"
        ],
        "flavor": [
            "sweet",
            "citrus",
            "lime",
            "lemon",
            "pine"
        ],
        "symbol": "Shr",
        "rating": 4.3478260869565215,
        "totalScore": 10
    },
    {
        "name": "African",
        "url": "african",
        "category": "sativa",
        "effects": [
            "aroused",
            "creative",
            "energetic",
            "euphoric",
            "tingly"
        ],
        "flavor": [
            "earthy",
            "pungent",
            "coffee",
            "spicy/herbal",
            "pepper"
        ],
        "symbol": "Afr",
        "rating": 3.933333333333333,
        "totalScore": 10
    },
    {
        "name": "Nepalese",
        "url": "nepalese",
        "category": "sativa",
        "effects": [
            "euphoric",
            "happy",
            "hungry",
            "relaxed",
            "uplifted"
        ],
        "flavor": [
            "sweet",
            "citrus",
            "grapefruit",
            "earthy",
            "spicy/herbal"
        ],
        "symbol": "Np",
        "rating": 4.361111111111111,
        "totalScore": 8
    },
    {
        "name": "Grapefruit",
        "url": "grapefruit",
        "category": "sativa",
        "effects": [
            "energetic",
            "euphoric",
            "focused",
            "happy",
            "uplifted"
        ],
        "flavor": [
            "sweet",
            "citrus",
            "grapefruit",
            "flowery",
            "earthy"
        ],
        "symbol": "Grf",
        "rating": 4.267573696145124,
        "totalScore": 8
    },
    {
        "name": "Dream Star",
        "url": "dream-star",
        "category": "hybrid",
        "effects": [
            "creative",
            "euphoric",
            "relaxed",
            "talkative",
            "uplifted"
        ],
        "flavor": [
            "sweet",
            "berry",
            "flowery",
            "earthy",
            "woody"
        ],
        "symbol": "Drs",
        "rating": 4.756756756756757,
        "totalScore": 7
    },
    {
        "name": "Hindu Kush",
        "url": "hindu-kush",
        "category": "indica",
        "effects": [
            "euphoric",
            "happy",
            "relaxed",
            "sleepy",
            "uplifted"
        ],
        "flavor": [
            "sweet",
            "earthy",
            "pungent",
            "woody",
            "spicy/herbal"
        ],
        "symbol": "Hk",
        "rating": 4.353319057815845,
        "totalScore": 7
    },
    {
        "name": "Grape Ape",
        "url": "grape-ape",
        "category": "indica",
        "effects": [
            "euphoric",
            "happy",
            "relaxed",
            "sleepy",
            "uplifted"
        ],
        "flavor": [
            "sweet",
            "berry",
            "grape",
            "earthy",
            "skunk"
        ],
        "symbol": "Ga",
        "rating": 4.298094652735095,
        "totalScore": 7
    }
]
this.setState({loading: true})


    request
      .post(`${baseURL}/strains/`)
      .set('Content-Type', 'application/json')
      .send({data: selectedBuzzwords})
      .then(res => {
        this.setState({loading: false})
        this.props.navigation.navigate('Recommendations', {recommended: res.body})
        // this.setState({recommended: res.body})
        // this.props.navigation.navigate('Recommendations', {recommendedStrains: ["Early Miss","Tangerine Sunrise","Sour Chocolate","Puna Buddaz","Pink Cookies"], recommended: res.body})
      })
      .catch(err => console.log(err))
  }

  getBuzzwordList = () => {
    request
      .get(`${baseURL}/buzzwords/`)
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
    const {selected, buzzwords, loading} = this.state
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          {this.extractBuzzwords(buzzwords, selected, this.toggleBuzzword)}
          <ContinueButton selected={selected} submitBuzzwords={this.submitBuzzwords} loading={loading}/>
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
