import {Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Home from '../screens/Home';
import Profile from '../screens/Profile/index';

const BottomTab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: 'black',
        },
      }}>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? '#FFF' : '#CCC'}}>{'Home'}</Text>
              );
            },
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="home"
                color={focused ? '#FFF' : '#CCC'}
                size={30}
              />
            ),
            headerShown: false,
          };
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? '#FFF' : '#CCC'}}>
                  {'Profile'}
                </Text>
              );
            },
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="user"
                color={focused ? '#FFF' : '#CCC'}
                size={30}
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabs;
