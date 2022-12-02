import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './Routes/Rotas'
import RotasTab from './Routes/RotasTab';

export default function App() {
  return (
    <NavigationContainer >
      <Rotas/>
    </NavigationContainer>
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
