import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {colors, parameters} from "./src/global/styles"
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInWelcome from './src/screens/authScreens/SignInWelcome';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      
      />
      <SignInWelcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
