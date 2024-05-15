/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const insights = [
  { id: 1, name: '', icon: '⚪' },
  { id: 2, name: '', icon: '🟢' },
  { id: 3, name: '', icon: '🟠' },
  { id: 4, name: '', icon: '🔵' },
];

const overviews = [
  { id: 1, name: 'New Leads', value: '25' },
  { id: 2, name: 'Visited Emails', value: '72' },
  { id: 3, name: 'Lead Mentors', value: '600' },
];

const opportunities = [
  { id: 1, name: 'Pipeline', value: '60%', color: '#6A71EC' },
  { id: 2, name: 'Target', value: '40%', color: '#FF9800' },
];

const upcomingMeetings = [
  { id: 1, name: 'Team Meeting', time: '10:00 AM' },
  { id: 2, name: 'Chuk E Cheese', time: '11:30 AM' },
];

const Dashboard = () => {
  const renderInsight = ({ item }) => (
    <View style={styles.insightItem}>
      <Text style={styles.insightIcon}>{item.icon}</Text>
      <Text style={styles.insightText}>{item.name}</Text>
    </View>
  );

  const renderOverview = ({ item }) => (
    <View style={styles.overviewItem}>
      <Text style={styles.overviewText}>{item.name}</Text>
      <Text style={styles.overviewValue}>{item.value}</Text>
    </View>
  );

  const renderOpportunity = ({ item }) => (
    <View style={[styles.opportunityItem, { backgroundColor: item.color }]}>
      <Text style={styles.opportunityText}>{item.name}</Text>
      <Text style={styles.opportunityValue}>{item.value}</Text>
    </View>
  );

  const renderUpcomingMeeting = ({ item }) => (
    <View style={styles.upcomingMeetingItem}>
      <Text style={styles.upcomingMeetingText}>{item.name}</Text>
      <Text style={styles.upcomingMeetingTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.insightsContainer}>
        <Text style={styles.sectionTitle}>Insights</Text>
        <FlatList
          data={insights}
          renderItem={renderInsight}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <FlatList
          data={overviews}
          renderItem={renderOverview}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.opportunitiesContainer}>
        <Text style={styles.sectionTitle}>Opportunities</Text>
        <FlatList
          data={opportunities}
          renderItem={renderOpportunity}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.upcomingMeetingsContainer}>
        <Text style={styles.sectionTitle}>Upcoming Meetings</Text>
        <FlatList
          data={upcomingMeetings}
          renderItem={renderUpcomingMeeting}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.footer}>
        {/* Add your footer icons here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: '#E6F0FF',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  insightsContainer: {
    padding: 16,
    // display:'flex',
    // alignItems:'center',
    // justifyContent:'center',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"black",
  },
  insightItem: {
    alignItems: 'center',
    backgroundColor:'white',
    padding:20,
    // marginRight: 16,
  },
  insightIcon: {
    fontSize: 30,
    // padding:'2rem',
  },
  insightText: {
    fontSize: 14,
    marginTop: 4,
  },
  overviewContainer: {
    padding: 16,
  },
  overviewItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginRight: 16,
    borderRadius: 8,
    elevation: 2,
  },
  overviewText: {
    fontSize: 14,
    color: '#808080',
  },
  overviewValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  opportunitiesContainer: {
    padding: 16,
  },
  opportunityItem: {
    padding: 16,
    marginRight: 16,
    borderRadius: 8,
  },
  opportunityText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  opportunityValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  upcomingMeetingsContainer: {
    padding: 16,
  },
  upcomingMeetingItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  upcomingMeetingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  upcomingMeetingTime: {
    fontSize: 14,
    color: '#808080',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
});

export default Dashboard;