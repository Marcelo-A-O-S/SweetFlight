import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home'
import RegistrarA from '../Pages/RegistrarA'
import RegistrarP from '../Pages/RegistrarP'
import ConsultarA from '../Pages/ConsultarA';
import ConsultarP from '../Pages/ConsultarP';

const Stack = createNativeStackNavigator();
export default function(){
    
    return(
      <Stack.Navigator initialRouteName='Home' screenOptions={{navigationBarColor:'#c72f2f'}}>
        <Stack.Screen name="Home" component={Home} options={{
          title:"Sweet Flight ",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',}}/>
        <Stack.Screen name="RegistrarA" component={RegistrarA} options={{
          title:'Registrar Avião Comercial',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',}}/>
        <Stack.Screen name="RegistarP" component={RegistrarP} options={{
          title:"Reservar passagem",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',}}/>
        <Stack.Screen name="ConsultarA" component={ConsultarA} options={{
          title:"Consultar Avião",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',}}/>
                  <Stack.Screen name="ConsultarP" component={ConsultarP} options={{
          title:"Consultar Passageiro",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',}}/>
      </Stack.Navigator>
    )
}