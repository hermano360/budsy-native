import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


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


export const RecommendedStrains = props => {

  console.log(styles)
  return (
    <TouchableOpacity>
      <CardOutline category={props.category}>
        <Text style={styles.cardOrder}>{props.order}</Text>
        <Text style={styles.cardTitle}>{props.name}</Text>
        <Text style={styles.cardTitle}>{props.symbol}</Text>
        <Text style={styles.cardTitle}>{props.rating}</Text>
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
    height: 400,
    margin: 20,
    borderRadius: 5,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
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
  }
};
