import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {mvs, s, vs} from 'react-native-size-matters';
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

const People = () => {
  const list = [
    {
      id: 1,
      title: 'Nature Lover',
      image:
        'https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Travel Enthusiast',
      image:
        'https://images.pexels.com/photos/7957992/pexels-photo-7957992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Photography Fanatic',
      image:
        'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Photography Fanatic',
      image:
        'https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Photography Fanatic',
      image:
        'https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      title: 'Photography Fanatic',
      image:
        'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const CardItem = ({item, index}) => {
    return (
      <Animated.View
        entering={FadeInDown.delay(index * 100)
          .duration(600)
          .springify()}
        style={{margin: 5}}>
        <Image
          source={{uri: item.image}}
          style={{height: index % 3 === 0 ? 200 : 300, borderRadius: 30}}
        />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={{height: vs(220), width: '100%'}}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            borderRadius: 40,
            marginTop: 70,
            marginLeft: 20,
            backgroundColor: '#E6EEFA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            borderRadius: 40,
            marginTop: 70,
            position: 'absolute',
            right: 20,
            backgroundColor: '#E6EEFA',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="mail" size={20} color="black" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.userContainer}>
        <View
          style={{
            height: mvs(90),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.followersView}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              1k{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                letterSpacing: 0.5,
              }}>
              Followers
            </Text>
          </View>
          <View style={styles.dpView}>
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.userImg}
            />
          </View>
          <View style={{right: s(40), marginTop: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              342
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                letterSpacing: 0.5,
              }}>
              Following
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-Bold',
            letterSpacing: 0.5,
            fontSize: 17,
          }}>
          @Catherine13
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#6C7A9C',
            fontFamily: 'Poppins-Regualar',
            paddingHorizontal: s(10),
            letterSpacing: 0.5,
            marginTop: vs(10),
          }}>
          My name is Catherine. I like dancing in the rain and travelling all
          around the world.
        </Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={{
              height: vs(40),
              width: s(130),
              borderRadius: 30,
              backgroundColor: '#5790DF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 15,
                color: 'white',
              }}>
              Follow
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: vs(40),
              width: s(130),
              borderRadius: 30,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 15,
                color: 'black',
              }}>
              Message
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
            gap: 20,
          }}>
          <TouchableOpacity
            style={{borderBottomWidth: 4, borderBottomColor: '#6C7A9C'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                letterSpacing: 0.5,
                color: 'black',
              }}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                letterSpacing: 0.5,
                color: 'black',
              }}>
              Photos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                letterSpacing: 0.5,
                color: 'black',
              }}>
              Videos
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, flex: 1}}>
          <MasonryList
            data={list}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item, i}) => <CardItem item={item} index={i} />}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop:vs(20)
  },
  userContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: '#E6EEFA',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  followersView: {
    paddingTop: 20,
    left: 50,
  },
  dpView: {
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 120,
    height: vs(100),
    width: s(100),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
  },
  userImg: {
    height: vs(90),
    width: s(90),
    borderRadius: 50,
  },
  buttonView: {
    gap: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
});
