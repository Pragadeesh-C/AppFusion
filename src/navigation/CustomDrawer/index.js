import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Button from '../../components/Button'
import { s } from 'react-native-size-matters'

const CustomDrawer = (props) => {
  return (
    
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <Button BtnName={'Buy Now'} width={s(100)} right={20}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})