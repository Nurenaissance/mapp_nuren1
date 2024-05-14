/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '80%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

const Landing = () => {
  const navigation = useNavigation();
  const [buttonOpacity] = useState(new Animated.Value(0));
  const [buttonPosition] = useState(new Animated.Value(100));

  useEffect(() => {
    const buttonAnimation = () => {
      Animated.sequence([
        Animated.delay(2000),
        Animated.parallel([
          Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(buttonPosition, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    };
    buttonAnimation();
  }, [buttonOpacity, buttonPosition]);

  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://media.licdn.com/dms/image/D4E0BAQGbil4mhEtiKQ/company-logo_200_200/0/1709105635622/nuren_ai_logo?e=2147483647&v=beta&t=efZZp6WXRUePmF6FfIfH7ku89KRSaERt8LvTUcFTPgs',
        }}
      />
      <Animated.View
        style={[
          styles.button,
          { opacity: buttonOpacity, transform: [{ translateY: buttonPosition }] },
        ]}
      >
        <TouchableOpacity onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Landing;
