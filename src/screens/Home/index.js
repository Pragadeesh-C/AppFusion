import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const StoryView = ({name, image}) => (
  <View style={{height: 80, width: 80, marginTop: 10, marginLeft: 10}}>
    <Image
      source={require('../../assets/images/story.png')}
      style={{height: 80, width: 80}}
    />
    <Text style={{fontFamily: 'Poppins-Medium', textAlign: 'center',color:'black'}}>
      {name}
    </Text>
  </View>
);

const PostView = () => (
  <View
    style={{
      height: 400,
      width: '95%',
      backgroundColor: '#E6EEFA',
      borderRadius: 30,
      alignSelf: 'center',
      bottom: 140,
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/post.png')}
        style={{height: 60, width: 60, margin: 10}}
      />
      <View>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16,color:'black'}}>
          Claire Dangais
        </Text>
        <Text style={{fontFamily: 'Poppins-Medium',color:'black'}}>@Claire</Text>
      </View>
    </View>

    <ImageBackground
      source={require('../../assets/images/postbg.png')}
      style={{
        height: 300,
        width: '100%',
        borderRadius: 30,
        alignSelf: 'center',
      }}>
      <AntDesign
        name="message1"
        size={23}
        color={'white'}
        style={styles.icon}
      />
      <Text
        style={[
          styles.icon,
          {
            fontSize: 16,
            color: 'white',
            marginLeft: 50,
            fontFamily: 'Poppins-SemiBold',

          },
        ]}>
        10
      </Text>
      <AntDesign name="heart" size={23} color={'white'} style={styles.like} />
      <Text
        style={[
          styles.icon,
          {
            fontSize: 16,
            color: 'white',
            marginLeft: 110,
            fontFamily: 'Poppins-SemiBold',
          },
        ]}>
        122
      </Text>
    </ImageBackground>
  </View>
);

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            borderRadius: 40,
            backgroundColor: '#E6EEFA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="camera" size={20} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 17,
            textAlign: 'center',
            marginTop: 10,
            color:'blackl'
          }}>
          Explore
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            borderRadius: 40,
            backgroundColor: '#E6EEFA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons name="bell-badge" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{flexDirection: 'row'}}>
        <StoryView name={'Fanita'} />
        <StoryView name={'Tarunes'} />
        <StoryView name={'Sriram'} />
        <StoryView name={'Shriram'} />
        <StoryView name={'Naresh'} />
        <StoryView name={'Madhan'} />
      </ScrollView>
      <PostView />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 20,
  },
  like: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 80,
  },
});
