import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Pages from '../../screens/Pages';
import Sections from '../../screens/Sections';
import Docs from '../../screens/Docs';
import CustomDrawer from '../CustomDrawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {vs, s, mvs} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props, isLoggedIn) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {width: '100%', paddingTop: mvs(30)},
        header: ({navigation}) => {
          return (
            <SafeAreaView>
              <View style={styles.header}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={styles.image}
                />
                <Text style={styles.headerText}>Fluxo</Text>
                <Ionicons
                  name="menu"
                  size={25}
                  color={'black'}
                  style={styles.menu}
                  onPress={() => navigation.openDrawer()} 
                />
              </View>
            </SafeAreaView>
          );
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabelStyle: {right: s(20)},
          drawerIcon: () => (
            <Image
              source={require('../../assets/images/down.png')}
              style={{
                right: s(3),
                height: 15,
                width: 15,
                position: 'absolute',
                right: 10,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pages"
        component={Pages}
        options={{
          drawerLabelStyle: {right: s(20)},
          drawerIcon: () => (
            <Image
              source={require('../../assets/images/down.png')}
              style={{
                right: s(3),
                height: 15,
                width: 15,
                position: 'absolute',
                right: 10,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sections"
        component={Sections}
        options={{
          drawerLabelStyle: {right: s(20)},
          drawerIcon: () => (
            <Image
              source={require('../../assets/images/down.png')}
              style={{
                right: s(3),
                height: 15,
                width: 15,
                position: 'absolute',
                right: 10,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Docs"
        component={Docs}
        options={{
          drawerLabelStyle: {right: s(20)},
          drawerIcon: () => (
            <Image
              source={require('../../assets/images/down.png')}
              style={{
                right: s(3),
                height: 15,
                width: 15,
                position: 'absolute',
                right: 10,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F2F3FA',
    height: vs(20),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: 10,
    alignSelf: 'center',
    top: 5,
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: s(20),
    color: 'black',
    textAlign: 'center',
  },
  menu: {
    position: 'absolute',
    right: 10,
    height: 25,
    width: 25,
  },
});
