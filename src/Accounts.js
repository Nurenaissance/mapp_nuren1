/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const AccountCard = ({ company, phone, industry, ownerName, email, iconColor, icon }) => (
  <View style={styles.accountCard}>
    <MaterialIcons name={icon} size={48} color={iconColor} style={styles.icon} />
    <Text style={styles.accountCompany}>{company}</Text>
    {phone ? <Text style={styles.phone}>{phone}</Text> : null}
    {industry ? <Text style={styles.industry}>{industry}</Text> : null}
    {ownerName ? <Text style={styles.ownerName}>{ownerName}</Text> : null}
    {email ? <Text style={styles.email}>{email}</Text> : null}
  </View>
);

const Account = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get('https://backendcrmnurenai.azurewebsites.net/accounts/', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching account data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {accounts.map((account, index) => (
          <AccountCard
            key={index}
            company={account.company}
            phone={account.phone}
            industry={account.industry}
            ownerName={account.Name}
            email={account.email}
            iconColor={getRandomColor()}
            icon="business"
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
  accountCard: {
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
  accountCompany: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  phone: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  industry: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  ownerName: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  email: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Account;
