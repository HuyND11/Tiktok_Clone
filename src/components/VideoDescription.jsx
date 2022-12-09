import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import React, {useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

function VideoDescription({desc, name, songName, songImage}) {
  let rotateValueHolder = new Animated.Value(0);

  useEffect(() => {
    startImageRotateFunction();
  }, []);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.description}>{desc}</Text>
      <View style={styles.songRow}>
        <View style={styles.songContent}>
          <FontAwesome name="music" size={24} color="#FFF" />
          <Text style={styles.songName}>{songName} </Text>
        </View>
        <Animated.Image
          style={[
            {
              transform: [{rotate: rotateData}],
            },
            styles.songImage,
          ]}
          source={{uri: songImage}}
        />
        {}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 5,
  },

  description: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 5,
  },

  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  songContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  songName: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '400',
    color: '#FFF',
    textTransform: 'capitalize',
  },

  songImage: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
});

export default VideoDescription;
