import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './src/Landing';
import Login from './src/Login';
import Register from './src/Register';
import Dashboard from './src/Dashboard';
import Contact from './src/Contact';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} /> */}
        {/* <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} /> */}
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
        {/* <Stack.Screen name="Contact" component={Contact} options={{ title: 'Dashboard' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
