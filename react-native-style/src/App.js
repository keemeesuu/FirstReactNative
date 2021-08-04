import React from 'react';
import { Text, View } from 'react-native';
// import { viewStyles, textStyles } from './styles';
// import { Header, Content, Footer } from './components/Layout';
import styled, { ThemeProvider } from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import { theme } from './theme';

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
    <ThemeProvider theme={theme}>
      <Container>
        <Button title="keemeesuu" />
        <Button title="React Native" />
        <Input borderColor="#3498db" />
        <Input borderColor="#9b59b6" />
      </Container>
    </ThemeProvider>
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
