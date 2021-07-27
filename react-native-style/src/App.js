import React from 'react';
import { Text, View } from 'react-native';
// import { viewStyles, textStyles } from './styles';
// import { Header, Content, Footer } from './components/Layout';
import styled from 'styled-components/native';
import Button from './components/Button';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    /*
      <View style={viewStyles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    */
    <Container>
      <Button title="keemeesuu" />
      <Button title="React Native" />
    </Container>
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
