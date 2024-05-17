/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const getStatusColor = (status) => {
  switch (status) {
    case 'New lead':
      return '#7e57c2';
    case 'Negotiation':
      return '#ef5350';
    default:
      return '#808080';
  }
};

const getCircleColor = (index) => {
  const colors = ['#7e57c2', '#5c6bc0', '#ffc107', '#ef5350', '#4caf50'];
  return colors[index % colors.length];
};

const LeadCard = ({ name, accountName, createdOn, status, circleColor }) => (
  <View style={styles.cardContainer}>
    <View style={[styles.circle, { backgroundColor: circleColor }]} />
    <View style={styles.cardContent}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.accountName}>{accountName}</Text>
      <View style={styles.dateStatusContainer}>
        <Text style={styles.createdOn}>{createdOn}</Text>
        <View style={[styles.statusContainer, { backgroundColor: getStatusColor(status) }]}>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    </View>
  </View>
);

const Lead = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backendcrmnurenai.azurewebsites.net/leads/');
        setLeads(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leadsSection}>
        <Text style={styles.sectionTitle}>Leads</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {leads.map((lead, index) => (
          <LeadCard
            key={lead.id}
            name={`${lead.first_name} ${lead.last_name}`}
            accountName={lead.account_name}
            createdOn={new Date(lead.createdOn).toLocaleDateString()}
            status={lead.status}
            circleColor={getCircleColor(index)}
          />
        ))}
      </ScrollView>
      {/* <View style={styles.bottomNavigation}>
        <MaterialIcons name="home" size={24} color="#333" />
        <MaterialIcons name="show-chart" size={24} color="#333" />
        <MaterialIcons name="group" size={24} color="#333" />
        <MaterialIcons name="message" size={24} color="#333" />
        <MaterialIcons name="add" size={24} color="#333" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  leadsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#5c6bc0',
    fontWeight: 'bold',
  },
  cardContainer: {
    paddingHorizontal: 16,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountName: {
    fontSize: 14,
    color: '#555',
  },
  dateStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  createdOn: {
    fontSize: 12,
    color: '#555',
    marginRight: 8,
  },
  statusContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  status: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  actionButton: {
    padding: 8,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
});

export default Lead;