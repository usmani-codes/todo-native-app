import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Splash from '../screens/Splash'
import Registration from '../screens/Registration'
import Login from '../screens/Login'
import ForgetPassword from '../screens/ForgetPassword'
import Dashboard from '../screens/dashboard'

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen
          name='splash'
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='registration'
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='forgetPassword'
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='dashboard'
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
