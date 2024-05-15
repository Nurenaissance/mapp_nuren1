/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: 1, name: 'Lorem Labeb', icon: '🔵', email: 'lorem@example.com' },
  { id: 2, name: 'Lorem Labeb', icon: '🔴' },
  { id: 3, name: 'Lorem Labeb', icon: '🟢' },
  { id: 4, name: 'Lorem Labem', icon: '⚪' },
  { id: 5, name: 'Lorem Labeb', icon: '🟣' },
  { id: 6, name: 'Lorem Labeb', icon: '🟠' },
  { id: 7, name: 'niggy labeb', icon: '🟢' },
  { id: 8, name: 'effprint labeb', icon: '🔵' },
  { id: 9, name: 'ziggy grace', icon: '🔴' },
];

const Contact = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.name}>{item.name}</Text>
      {item.email && <Text style={styles.email}>{item.email}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contacts</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
      <View style={styles.footer}>
        {/* Add your footer icons here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e6f0ff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#0070c0',
  },
  contactItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    fontSize: 24,
  },
  name: {
    fontSize: 16,
    marginTop: 8,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default Contact;