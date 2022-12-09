import {View, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import React from 'react';

function Avatar({image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: image}} />
      <AntDesign style={styles.icon} name="pluscircle" size={20} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    position: 'relative',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    // justifyContent
    alignItems: 'center',
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 99,
  },

  icon: {
    position: 'absolute',
    bottom: -10,
    // top: 0,
    backgroundColor: '#FFF',
    borderRadius: 99,
  },
});

export default Avatar;
