import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Logo from './../../components/Logo';

function StartScreen({navigation}) {
  return (
    <View>
      <Logo />
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={[
            styles.signIn,
            {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15,
            },
          ]}>
          <Text
            style={[
              styles.textSign,
              {
                color: '#009387',
              },
            ]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={[
            styles.signIn,
            {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15,
            },
          ]}>
          <Text
            style={[
              styles.textSign,
              {
                color: '#009387',
              },
            ]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
