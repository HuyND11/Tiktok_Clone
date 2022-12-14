import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Avatar from './Avatar';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

function ReactBar({isLove, avatar, love, share}) {
  const [loveStatus, setLoveStatus] = useState({
    isLove: isLove,
    quantityLove: love,
  });

  const Loving = () => {
    if (loveStatus?.isLove) {
      loveStatus?.quantityLove - 1;
      setLoveStatus({...loveStatus, isLove: false});
    } else {
      loveStatus?.quantityLove + 1;
      setLoveStatus({...loveStatus, isLove: true});
    }
  };
  return (
    <View style={styles.container}>
      <Avatar image={avatar} />
      <TouchableOpacity onPress={Loving}>
        <View style={styles.reactIcon}>
          <AntDesign
            name="heart"
            size={30}
            color={loveStatus?.isLove ? 'red' : 'white'}
          />
          <Text style={styles.quantity}>{loveStatus?.quantityLove}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.reactIcon}>
        <FontAwesome name="commenting" size={30} color="#FFF" />
        <Text style={styles.quantity}>50</Text>
      </View>

      <View style={styles.reactIcon}>
        <Fontisto name="favorite" size={30} color="#FFF" />
        <Text style={styles.quantity}>50</Text>
      </View>
      <View style={styles.reactIcon}>
        <FontAwesome name="share" size={30} color="#FFF" />
        <Text style={styles.quantity}>{share}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
  },

  reactIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  quantity: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
  },
});

export default ReactBar;
