/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ContactList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {data.length > 0 ? (
        data.map((contact: any, index) => (
          <View key={index} style={styles.specificUsersCard}>
            <View>
              <Image
                source={{uri: `https://i.pravatar.cc/150?img=${index}`}}
                style={styles.avatarStyle}
              />
            </View>
            <View>
              <Text>{contact.name}</Text>
              <Text>{contact.email}</Text>
              <Text>{contact.phone}</Text>
            </View>
          </View>
        ))
      ) : loading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>No Data Found</Text>
      )}
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  specificUsersCard: {
    width: 360,
    height: 100,
    backgroundColor: '#CAD5E2',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
