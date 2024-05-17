/* eslint-disable prettier/prettier */

import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Pie from 'react-native-pie';

const Dashboard = () => {
  const InsightsCards = [
    {
      icon: ['mood', 'mood', 'mood', 'mood', 'mood'],
      colors: ['#4048FF78', '#FF404052', '#4FFF4091', '#FBFF40', '#CF6F64'],
      text: 'Latest Accounts',
    },
    {
      icon: ['mood', 'mood', 'mood', 'mood', 'mood'],
      colors: ['#4048FF78', '#FF404052', '#4FFF4091', '#FBFF40', '#CF6F64'],
      text: 'Latest Contacts',
    },
    {
      icon: ['mood', 'mood', 'mood', 'mood', 'mood'],
      colors: ['#4048FF78', '#FF404052', '#4FFF4091', '#FBFF40', '#CF6F64'],
      text: 'Latest Leads',
    },
  ];

  const overviewCards = [
    { icon: 'description', text: 'Closed Deals', color: '#FF5733' },
    { icon: 'handshake', text: 'New Deals', color: '#33FF57' },
    { icon: 'attach-money', text: 'Est. Revenue', color: '#3366FF' },
  ];

  const opportunityData = [
    {
      key: 1,
      value: 120,
      svg: { fill: '#7e57c2' },
      label: 'Leads',
    },
    {
      key: 2,
      value: 100,
      svg: { fill: '#42a5f5' },
      label: 'Proposals',
    },
    {
      key: 3,
      value: 60,
      svg: { fill: '#ec407a' },
      label: 'Negotiation',
    },
    {
      key: 4,
      value: 20,
      svg: { fill: '#fbc02d' },
      label: 'Contracts sent',
    },
    {
      key: 5,
      value: 20,
      svg: { fill: '#4caf50' },
      label: 'Won',
    },
    {
      key: 6,
      value: 20,
      svg: { fill: '#f44336' },
      label: 'Lost',
    },
  ];

  const totalValue = opportunityData.reduce((sum, item) => sum + item.value, 0);

  const upcomingMeetings = [
    {
      icon: 'mood',
      iconColor: '#9370DB',
      title: 'New Meeting',
      time: 'In 10 mins',
    },
    {
      icon: 'mood',
      iconColor: '#7CFC00',
      title: 'New Meeting',
      time: 'In 30 mins',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.section}>
        <View style={styles.insightsContainer}>
          <Text style={styles.insightsTitle}>Insights</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.insightCardsContainer}
          >
            {InsightsCards.map((card, index) => (
              <View key={index} style={styles.InsightCard}>
                <View style={styles.Insighticons}>
                  {card.icon.map((iconName, i) => (
                    <View key={i} style={[styles.iconBackground, { backgroundColor: card.colors[i] }]}>
                    <MaterialIcons
                    name={iconName}
                    size={24}
                    color="black"
                  />
                  </View>
                  ))}
                </View>
                <Text style={styles.overviewText}>{card.text}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.overviewContainer}
        >
          {overviewCards.map((card, index) => (
            <View key={index} style={styles.overviewCard}>
               <View style={[styles.iconBackground, { backgroundColor: card.color }]}>
                <MaterialIcons name={card.icon} size={24} color="black" />
              </View>
              <Text style={styles.overviewText}>{card.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.opportunityTitle}>Opportunities</Text>
        <View style={styles.pieContainer}>
          <View style={styles.chartContainer}>
            <Pie
              style={styles.piechartcss}
              radius={80}
              innerRadius={50}
              sections={[
                {
                  percentage: 40,
                  color: '#7e57c2',
                },
                {
                  percentage: 10,
                  color: '#42a5f5',
                },
                {
                  percentage: 30,
                  color: '#ec407a',
                },
                {
                  percentage: 10,
                  color: '#fbc02d',
                },
                {
                  percentage: 6,
                  color: '#4caf50',
                },
                {
                  percentage: 4,
                  color: '#f44336',
                },
              ]}
              strokeCap={'butt'}
            />
            <View style={styles.totalContainer}>
              <Text style={styles.totalValue}>Total {totalValue}</Text>
            </View>
          </View>
          <View style={styles.legendContainer}>
            {opportunityData.map((item) => (
              <View key={item.key} style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: item.svg.fill }]} />
                <Text style={styles.legendLabel}>{item.label}</Text>
                <Text style={styles.legendValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.upcomingMeetingsTitle}>Upcoming Meetings</Text>
        {upcomingMeetings.map((meeting, index) => (
          <View key={index} style={styles.upcomingMeetingCard}>
            <MaterialIcons name={meeting.icon} size={24} color={meeting.iconColor} />
            <View style={styles.meetingDetails}>
              <Text style={styles.meetingTitle}>{meeting.title}</Text>
              <Text style={styles.meetingTime}>{meeting.time}</Text>
            </View>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  insightsContainer: {
    marginBottom: 16,
  },
  insightsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'sans-serif',
    color: 'black',
  },
  insightCardsContainer: {
    // marginBottom: 10,
  },
  InsightCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginRight: 16,
    borderRadius: 8,
    alignItems: 'center',
    // flexDirection: 'row',
    shadowColor: '#000',
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  iconBackground: {
    width: 35,
    height: 35,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -8,
  },
  Insighticons: {
    flexDirection: 'row',
  },
  overviewTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'sans-serif',
    color: 'black',
  },
  overviewContainer: {
    marginBottom: 16,
  },
  overviewCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginRight: 16,
    borderRadius: 8,
    alignItems: 'center',
    // flexDirection: 'row',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overviewText: {
    fontSize: 16,
    marginLeft: 8,
    fontFamily: 'sans-serif',
  },
  opportunityTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'sans-serif',
    color: 'black',
  },
  pieContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartContainer: {
    marginRight: 16,
  },
  totalContainer: {
    marginLeft: 40,
    marginTop: 10,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  legendContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendLabel: {
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  legendValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  upcomingMeetingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'sans-serif',
    color:'black',
  },
  upcomingMeetingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  meetingDetails: {
    marginLeft: 16,
    flex: 1,
  },
  meetingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  meetingTime: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'sans-serif',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#aaa',
  },
});

export default Dashboard;

