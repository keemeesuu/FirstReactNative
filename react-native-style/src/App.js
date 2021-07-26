import React from 'react';
import { Text, View } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Content, Footer } from './components/Layout';


const App = () => {
  return (
      <View style={viewStyles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
  );
};

export default App;


/*
export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/
