import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

const Button = ({BtnName,width,right}) => {
  return (
    <TouchableOpacity style={{height:moderateScale(50),marginTop:moderateVerticalScale(15),width:moderateScale(width),backgroundColor:'#4D5BED',borderRadius:4,justifyContent:'center',marginLeft:10,marginRight:right}}>
        <Text style={{textAlign:'center',color:'white',fontFamily:'Poppins-Medium'}}>{BtnName}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})