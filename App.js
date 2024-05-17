/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

import Landing from './src/Landing';
import Login from './src/Login';
import Register from './src/Register';
import Dashboard from './src/Dashboard';
import Contact from './src/Contact';
import Lead from './src/Lead';
import Accounts from './src/Accounts';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'dashboard';
          } else if (route.name === 'Leads') {
            iconName = 'list';
          } else if (route.name === 'Accounts') {
            iconName = 'account-balance';
          } else if (route.name === 'Contacts') {
            iconName = 'contacts';
          }

          return (
            <View style={{ alignItems: 'center' }}>
              <MaterialIcons name={iconName} size={size} color={color} />
              {focused && <View style={{ height: 2, backgroundColor: 'black', width: '100%', marginTop: 4 }} />}
            </View>
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
      <Tab.Screen name="Leads" component={Lead} options={{ title: 'Leads' }} />
      <Tab.Screen name="Accounts" component={Accounts} options={{ title: 'Accounts' }} />
      <Tab.Screen name="Contacts" component={Contact} options={{ title: 'Contacts' }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Landing from './src/Landing';
// import Login from './src/Login';
// import Register from './src/Register';
// import Dashboard from './src/Dashboard';
// import Contact from './src/Contact';
// import Lead from './src/Lead';
// import Accounts from './src/Accounts';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
//       <Tab.Screen name="Leads" component={Lead} options={{ title: 'Leads' }} />
//       <Tab.Screen name="Accounts" component={Accounts} options={{ title: 'Accounts' }} />
//       <Tab.Screen name="Contacts" component={Contact} options={{ title: 'Contacts' }} />
//     </Tab.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Landing">
//         <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
//         <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
//         <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

