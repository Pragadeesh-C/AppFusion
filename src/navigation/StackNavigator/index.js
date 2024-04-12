import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../../screens/Home';
import DrawerNavigator from '../DrawerNavigator';

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})