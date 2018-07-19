import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const CardOutline = props => {
  return (
    <View style={{...styles.card, borderColor: colorCodes[props.category]}}>
      {props.children}
      <View style={{...styles.categorySection, backgroundColor: colorCodes[props.category]}}>
        <Text style={styles.cardTitle}>{props.category}</Text>
      </View>
    </View>
  )
}



const CardRating = props => {
  console.log(new Array(5).fill(null).map((element,i )=> {
      if(props.rating >= i) return 1
      else if(props.rating >= i - .5) .5
      else return 0
    }))
  return <View></View>
}



export const RecommendedStrains = props => {
  return (
    <TouchableOpacity>
      <CardOutline category={props.category}>
        <View style={styles.cardOrder} >
          <Text style={styles.cardOrderText}>{props.order}</Text>
        </View>
        <Text style={styles.cardStrainTitle}>{props.name}</Text>
        <Text style={styles.cardSymbol}>{props.symbol}</Text>
        <FontAwesome name="star" size={32} color="white" />
        <CardRating rating={4.3} />
      </CardOutline>
    </TouchableOpacity>
  )

}
const colorCodes = {
  sativa: '#ea4fbd',
  indica: '#4e1a8c',
  hybrid: '#fabf42'
}
const styles = {
  card: {
    width: 250,
    margin: 20,
    borderRadius: 5,
    borderWidth: 3,
    alignItems: 'center'
  },
  cardStrainTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  cardSymbol: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30
  },
  cardTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  categorySection:{
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  cardOrder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    margin: 5
  },
  cardOrderText: {
    color: '#fff'
  }
};
