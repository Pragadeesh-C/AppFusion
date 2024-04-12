import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../../screens/Home';
import DrawerNavigator from '../DrawerNavigator';
import TabNavigator from '../TabNavigator';

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='TabNavigator'>
        <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />

        <Stack.Screen name='TabNavigator' component={TabNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})