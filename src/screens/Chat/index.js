import React, { useState, useCallback, useEffect } from 'react';
import { Text, View,Image, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { moderateScale } from 'react-native-size-matters';


const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]);
    }, []);
  
    const onSend = useCallback((messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    }, []);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Animated.View entering={FadeInDown.springify()} style={{ padding: 10, flexDirection:'row' , borderWidth:0.5,backgroundColor:'#E(E(EB'}}>
      <Image style={{height:moderateScale(50),width:moderateScale(50),borderRadius:100,alignSelf:'center'}} source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
      <Animated.View entering={FadeInDown.duration(600).springify()} style={{padding:moderateScale(5)}}>

      <Text style={{ fontSize: 18,textAlign:'center',fontFamily:'Poppins-SemiBold',textAlign:'center', }}>Catherine</Text>
      <Text style={{textAlign:'center',fontFamily:'Poppins-Regular',left:20}}>Last Seen  11:44 am</Text>
      </Animated.View>
    </Animated.View>
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  </SafeAreaView>

  )
}

export default Chat

