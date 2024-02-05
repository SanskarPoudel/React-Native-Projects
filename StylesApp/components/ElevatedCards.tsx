/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards ScrollView</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>More</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>....</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderRadius: 5,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
