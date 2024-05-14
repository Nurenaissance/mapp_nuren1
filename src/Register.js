/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Navigation hook

  const roles = ['Admin', 'Employee', 'User'];

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setModalVisible(false);
  };

  const authRegister = () => {
    fetch(`https://backendcrmnurenai.azurewebsites.net/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        role, // Include the selected role in the registration request
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert('Registration successful');
          navigation.navigate('Login'); // Navigate to Login screen upon successful registration
        } else {
          throw new Error('Registration failed');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <Image
        style={styles.registerImage}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/010/925/404/non_2x/registration-page-name-and-password-field-fill-in-form-menu-bar-corporate-website-create-account-user-information-flat-design-modern-illustration-vector.jpg',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="👤 Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="✉️ Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="🔑 Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>{role ? role : 'Select Role'}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {roles.map((r, index) => (
              <TouchableOpacity
                key={index}
                style={styles.roleItem}
                onPress={() => handleRoleSelect(r)}
              >
                <Text>{r}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={[styles.roleItem, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={authRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Already have an Account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  registerImage: {
    height: '30%',
    width: '90%',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  roleItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  cancelButton: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 10,
  },
  cancelText: {
    color: 'red',
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default Register;
