/* eslint-disable prettier/prettier */
// import React, { useState } from 'react';
// import { Text, View } from 'react-native';
// import Landing from './src/Landing';
// import { Login } from './src/Login';
// import { Register } from './src/Register';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('Landing'); // State to track current page

//   // Function to switch between pages
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Render the current page based on state
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'Landing':
//         return <Landing onPageChange={handlePageChange} />;
//       case 'Login':
//         return <Login onPageChange={handlePageChange} />;
//       case 'Register':
//         return <Register onPageChange={handlePageChange} />;
//       default:
//         return null;
//     }
//   };

//   return <View>{renderPage()}</View>;
// };

// export default App;


// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './src/Landing';
import Login from './src/Login';
import Register from './src/Register';
import Dashboard from './src/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
