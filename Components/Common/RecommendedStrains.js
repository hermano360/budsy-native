import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const CardOutline = props => {
  return (
    <View style={{...styles.card, borderColor: colorCodes[props.category]}}>
      {props.children}
      <View style={{...styles.categorySection, backgroundColor: colorCodes[props.category]}}>
        <Text style={styles.cardTitle}>{props.category}</Text>
        <View style={styles.thumbsRating}>
          <TouchableOpacity onPress={() => console.log(props.selected, props.name, false)}>
            <FontAwesome name="thumbs-down" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log(props.selected, props.name, true)}>
            <FontAwesome name="thumbs-up" size={32} color="white"  />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



const CardRating = props => {
  return (
    <View style={styles.cardRatingHolder}>
      {new Array(5).fill(null).map((element,i )=> {
          if(props.rating >= i) return <FontAwesome name="star" size={32} color="white" key={i}/>
          else if(props.rating >= i - .5) <FontAwesome name="star-half" size={32} color="white" key={i} />
          else return 0
        })}
    </View>
  )
}

export const RecommendedStrains = props => {
  return (
    <View>
      <CardOutline category={props.category} selected={props.selected} name={props.name}>
        <View style={styles.cardOrder} >
          <Text style={styles.cardOrderText}>{props.order}</Text>
        </View>
            <View style={styles.cardStrainContainer} >
              <Text style={styles.cardStrainTitle}>{props.name}</Text>
            </View>
            <Text style={styles.cardSymbol}>{props.symbol}</Text>
        <CardRating rating={4.3} />
      </CardOutline>
    </View>
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
  cardStrainContainer: {
    height: 48
  },
  cardStrainTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap'
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
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  categorySection:{
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
  },
  cardRatingHolder: {
    flexDirection: 'row',
    height: 48,
  },
  thumbsRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    margin: 20
  }
};
