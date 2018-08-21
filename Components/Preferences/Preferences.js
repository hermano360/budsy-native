import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import {SelectOptions, ContinueButton} from '../Common'
import request from 'superagent'
import {baseURL} from '../Common/baseURL'
import {observer, inject} from 'mobx-react'

export const Preferences = inject("buzzwords")(observer(class Preferences extends React.Component {
  toggleBuzzword = (buzzword, category) => {
    let selected = this.props.buzzwords.selected[category.toLowerCase()]
    this.props.buzzwords.selected[category.toLowerCase()] = selected.includes(buzzword) ? selected.filter(selection => selection !== buzzword) : [...selected, buzzword]
}

  submitBuzzwords = () => {
    const finalFlavors = this.props.buzzwords.selected.flavor.map(word => ({category: 'flavor', word }))
    const finalEffects = this.props.buzzwords.selected.effects.map(word => ({ category: 'effects', word }))
    this.props.buzzwords.loading = true
    request
      .post(`${baseURL}/strains/`)
      .set('Content-Type', 'application/json')
      .send({data: [...finalFlavors, ...finalEffects]})
      .then(res => {
        this.props.buzzwords.recommendations = res.body
        this.props.buzzwords.loading = false
        this.props.navigation.navigate('Recommendations')
    }).catch(err => {
      this.props.buzzwords.loading = false
      console.log(err)
    })
  }

  addBuzzwordCount = category => {
    if(this.props.buzzwords[category].length > this.props.buzzwords.count[category]){
      this.props.buzzwords.count[category] += 4
    }
  }

  render() {
    const {navigation, buzzwords} = this.props
    const flavorsSelected = buzzwords.selected.flavor
    const effectsSelected = buzzwords.selected.effects
    const flavorCount = buzzwords.count.flavor
    const effectsCount = buzzwords.count.effects
    const {loading} = buzzwords
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
          <SelectOptions
            title={'Flavor'}
            subtitle={'Select Your Top Three'}
            buzzwords={this.props.buzzwords.flavor}
            selected={flavorsSelected}
            toggleBuzzword={this.toggleBuzzword}
            addBuzzwordCount={() => this.addBuzzwordCount('flavor')}
            count={flavorCount}
          />
          <SelectOptions
            title={'Effects'}
            subtitle={'Select Your Top Three'}
            buzzwords={this.props.buzzwords.effects}
            selected={effectsSelected}
            toggleBuzzword={this.toggleBuzzword}
            addBuzzwordCount={() => this.addBuzzwordCount('effects')}
            count={effectsCount}
          />
          <ContinueButton selected={[flavorsSelected, effectsSelected]} submitBuzzwords={this.submitBuzzwords} loading={loading}/>
        </View>
      </ScrollView>
    );
  }
}))

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#0d1329'
  },
  container: {
    flex: 1,
    backgroundColor: '#0d1329',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  }
});
