/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Cards3() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevated]}>
        <View>
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
              Pokhara is a beautiful city in Nepal, known for its stunning
              natural beauty and as a gateway to the Annapurna mountain range.
            </Text>
            <Text style={styles.cardFooter}>
              Come and enjoy the beauty of nature
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevated: {},
  cardImage: {
    height: 200,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
