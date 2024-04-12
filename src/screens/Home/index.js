import {StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { moderateScale, scale } from 'react-native-size-matters';
import Button from '../../components/Button';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'black',fontSize:scale(35),margin:moderateScale(20),textAlign:"center"}}>
        Become Social Media Marketing Experts
      </Text>
      <Text style={{color: 'black',fontSize:scale(15),margin:moderateScale(20),textAlign:"center"}}>
      We makes it easy for businesses and marketing teams to manage your social account in a single place.
      </Text>
      <Button BtnName={'Get Started Now'} width={250}/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3FA',
    // paddingTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});