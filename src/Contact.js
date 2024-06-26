/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const ContactCard = ({ name, codyName, phone, iconColor, icon }) => (
  <View style={styles.contactCard}>
    <MaterialIcons name={icon} size={48} color={iconColor} style={styles.icon} />
    <Text style={styles.contactName}>{name}</Text>
    {phone ? <Text style={styles.phone}>{phone}</Text> : null}
  </View>
);

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get('https://backendcrmnurenai.azurewebsites.net/contacts/', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contact data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.Name}
            codyName={contact.company}
            phone={contact.phone}
            iconColor={getRandomColor()}
            icon="person"
          />
        ))}
      </ScrollView>
    </View>
  );
};

const getRandomColor = () => {
  const colors = [
    '#7e57c2',
    '#795548',
    '#ffc107',
    '#7e57c2',
    '#5d4037',
    '#ffd54f',
    '#4caf50',
    '#7e57c2',
    '#795548',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  contactCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 8,
    width: '45%',
    elevation: 2,
  },
  icon: {
    marginBottom: 8,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  phone: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Contact;