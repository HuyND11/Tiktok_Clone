import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/TikTok_logo.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});

export default Logo;
