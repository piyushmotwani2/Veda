import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './login/ButtonComponent'
import HeyThereComponent from './login/HeyThereComponent';
import LoginComponent from './login/LoginComponent';
import PathComponent from './login/PathComponent';
import PasswordComponent from './login/PasswordComponent';
import EnteryourcredentialstologinComponent from './login/EnteryourcredentialstologinComponent';
import UsernameComponent from './login/UsernameComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <PathComponent />
      <HeyThereComponent />
      <EnteryourcredentialstologinComponent />
      <UsernameComponent />
      <PasswordComponent />
      <LoginComponent />
      <ButtonComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
