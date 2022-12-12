import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import BottomTabs from './src/navigation/BottomTabs';
import StartScreen from './src/screens/Auth/index';
import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({navigation}) => {
            return {
              animation: 'fade_from_bottom',
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Ionicons name="ios-arrow-back" color={'#000'} size={30} />
                  </TouchableOpacity>
                );
              },
            };
          }}>
          {/* <Stack.Screen
            name="start"
            component={StartScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{headerShown: true, title: false}}
          />

          <Stack.Screen
            name="RegisterScreen"
            component={Register}
            options={{title: false}}
          /> */}

          <Stack.Screen
            name="main"
            component={BottomTabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
