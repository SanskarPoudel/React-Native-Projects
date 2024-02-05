/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What is Pokhara All About ?</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://photo.ntb.gov.np/public/uploads/preview/lakeside-pokhara-nepal-109871610434872os5bi9sasr.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3} style={styles.blogDescription}>
            Pokhara is a city on Phewa Lake, in central Nepal. It’s known as a
            gateway to the Annapurna Circuit, a popular trail in the Himalayas.
            Tal Barahi Temple, a 2-story pagoda, sits on an island in the lake.
            On the eastern shore, the Lakeside district has yoga centers and
            restaurants. In the city’s south, the International Mountain Museum
            has exhibits on the history of mountaineering and the people of the
            Himalayas.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity>
            <Text
              onPress={() =>
                openWebsite(
                  'https://www.welcomenepal.com/places-to-see/pokhara.html',
                )
              }
              style={styles.readMoreText}>
              Read More
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              onPress={() => openWebsite('https://github.com/SanskarPoudel')}
              style={styles.readMoreText}>
              Follow Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 18,
    marginTop: 10,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 5,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cardImage: {
    height: 200,
  },
  cardBody: {
    marginTop: 10,
  },
  blogDescription: {
    marginTop: 3,
    paddingLeft: 10,
    fontSize: 13,
    color: '#ffffff',
  },
  cardFooter: {
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  readMoreText: {
    backgroundColor: '#FFF',
    width: 80,
    textAlign: 'center',
    padding: 3,
    borderRadius: 5,
    elevation: 2,
    color: '#000000',
  },
});
