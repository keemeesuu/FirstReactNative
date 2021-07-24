import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
  return ( 
    <View style={{
      flex : 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Text style={{ fontSize: 30, marginBottom: 0}}>
        My Button Component
      </Text>
      <MyButton title="Button" />
      <MyButton title="Button" >Children Props</MyButton>
      <MyButton />
    </View>
  );
};

export default App;