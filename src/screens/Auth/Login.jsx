import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import React, {useEffect, useState} from 'react';
import {useCallback} from 'react';
import firestore from '@react-native-firebase/firestore';

function Login({navigation}) {
  const [accounts, setAccounts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getData() {
      const users = await firestore().collection('users').get();
      const userList = users.docs.map(doc => ({...doc.data(), id: doc.id}));
      setAccounts(userList);
    }
    getData();
  }, []);

  const handleChange = useCallback(
    (name, value) => {
      setUser({
        ...user,
        [name]: value,
      });
    },
    [user],
  );

  const handleSubmit = () => {
    if (userExist(user?.phone, user?.password)) {
      navigation.navigate('main');
    } else {
      console.log('sai account');
    }
  };

  // function checkPhone(phone) {
  //   let condition = false;
  //   accounts?.map(account => {
  //     if (account.phone === phone) {
  //       condition = true;
  //       return true;
  //     }
  //   });
  //   return condition;
  // }

  // function checkPassword(password) {
  //   let condition = false;
  //   accounts?.map(account => {
  //     if (account.password === password) {
  //       condition = true;
  //       return true;
  //     }
  //   });
  //   return condition;
  // }

  const userExist = (phone, password) => {
    return accounts.some(account => {
      return account.phone === phone && account.password === password;
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <Text style={[styles.text_footer]}>Your Phone</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'black'} size={20} />
          <TextInput
            placeholder="Your phone"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => handleChange('phone', val)}
          />
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              color: 'black',
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={'black'} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
            autoCapitalize="none"
            name="password"
            onChangeText={val => handleChange('password', val)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={handleSubmit}
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
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
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
