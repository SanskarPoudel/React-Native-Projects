/* eslint-disable prettier/prettier */

import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 6,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 5,
    margin: 10,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});

export default FlatCards;
