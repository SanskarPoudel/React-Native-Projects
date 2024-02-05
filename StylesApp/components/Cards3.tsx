/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Cards3() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://media.istockphoto.com/id/687611810/photo/view-at-annapurna-mountain-range-and-its-reflection-in-phewa-lake-in-pokhara-nepal.jpg?s=612x612&w=0&k=20&c=r1uza8OoSQeGGTrnnaHyq7HSxHG9DyvjHxxm4vqgDsc=',
            }}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Fewa Lake</Text>
            <Text style={styles.cardLabel}>Pokhara</Text>
            <Text style={styles.cardDescription}>
              It is a beautiful city in Nepal, known for its stunning natural
              beauty and as a gateway to the Annapurna mountain range.
            </Text>
            <Text style={styles.cardFooter}>
              Come and enjoy the beauty of nature.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevated: {
    backgroundColor: '#747873',
    elevation: 5,
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 13,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardDescription: {
    color: '#ffffff',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
