import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './components/Counter';
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
      <Counter />
    </View>
  );
};

export default App;