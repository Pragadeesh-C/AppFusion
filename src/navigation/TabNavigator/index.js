import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Home from '../../screens/Home';
import Chat from '../../screens/Chat';
import Add from '../../screens/Add';
import Notifications from '../../screens/Notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import People from '../../screens/People';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () =>  {
  return (
    <Tab.Navigator barStyle={{backgroundColor:'#8575B0',height:80}} activeIndicatorStyle={{backgroundColor:'#000'}}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel:'',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'white'} size={26} />
          ),
        
        }}/>
      <Tab.Screen name="Chat" component={Chat} 
      options={{
        tabBarLabel:'',
        tabBarIcon: ({ color }) => (
          <Ionicons name="chatbubbles-sharp" color={'white'} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Add" component={Add}
      options={{
        tabBarLabel:'',
        tabBarIcon: ({ color }) => (
          <AntDesign name="pluscircle" color={'white'} size={26} />
        ),
      }} />
      <Tab.Screen name="People" component={People}
      options={{
        tabBarLabel:'',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user" color={'white'} size={26} />
        ),
      }} />
      <Tab.Screen name="Notification" component={Notifications}
      options={{
        tabBarLabel:'',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell-badge" color={'white'} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default TabNavigator