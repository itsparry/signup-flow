import Login from './screens/Login';
import Age from './screens/Age';
import Username from './screens/Username';
import Contacts from './screens/Contacts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from './screens/Info';
import React from 'react';

const MainStack = createNativeStackNavigator();

const MainPage = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Age" component={Age} />
        <MainStack.Screen name="Username" component={Username} />
        <MainStack.Screen name="Contacts" component={Contacts} />
        <MainStack.Screen name="Info" component={Info} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default MainPage