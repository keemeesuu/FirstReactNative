import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';
// import { viewStyles, textStyles } from './styles';
// import { Header, Content, Footer } from './components/Layout';
import styled, { ThemeProvider } from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import { lightTheme, darkTheme } from './theme';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`;

const App = () => {
  // const [값변수, 값변경함수] = useState(기본값);
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);

  return (
    /*
      <View style={viewStyles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    */
    <ThemeProvider theme={isDark ? darkTheme: lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch} />
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
