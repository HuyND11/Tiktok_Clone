import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/dist/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import {Modalize} from 'react-native-modalize';
import Video from 'react-native-video';
import Post from '../../components/Post';
import PostAPI from './../../api/post';

const Upload = ({navigation}) => {
  const [videoInfo, setVideoinfo] = useState({
    author: {
      name: 'Huynd',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/439.jpg',
    },
    share: 0,
    like: 0,
    isLove: false,
    songImage:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1162.jpg',
  });

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const handleMakeVideo = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(video => {
      setVideoinfo({...videoInfo, videoURL: video.path});
    });
  };

  const handleChooseVideo = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    }).then(video => {
      setVideoinfo({...videoInfo, videoURL: video.path});
    });
  };

  const handleSavePost = () => {
    if (videoInfo?.videoURL) {
      console.log('posted');
      PostAPI.postNewPost(videoInfo);
      navigation.navigate('home');
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24}}>ADD NEW POST</Text>
        <TextInput
          placeholder={'Enter Song name'}
          onChangeText={val => {
            setVideoinfo({...videoInfo, songName: val});
          }}
          value={videoInfo?.songName}
        />
        <TextInput
          placeholder={'Enter post description'}
          onChangeText={val => {
            setVideoinfo({...videoInfo, description: val});
          }}
          value={videoInfo?.description}
        />
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={onOpen}>
          <Feather name={'image'} color={'black'} size={30} />
          <Text>Add Video</Text>
        </TouchableOpacity>
        <View style={{width: 350, marginTop: 30, marginBottom: 30}}>
          <Text style={{marginBottom: 20}}>
            Song name: {videoInfo?.songName}
          </Text>
          <Text style={{marginBottom: 20}}>
            Description: {videoInfo?.description}
          </Text>
          <Video
            source={{uri: videoInfo?.videoURL}}
            style={{width: 350, height: 350}}
          />
        </View>
      </View>
      <View style={styles.spacer} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}>
          <Feather name="x" size={24} color="black" />
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSavePost()}
          style={styles.postButton}>
          <Feather name="corner-left-up" size={24} color="white" />
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <Modalize
        ref={modalizeRef}
        modalHeight={200}
        handlePosition={'inside'}
        onClose={() => {}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{width: 300, marginTop: 30}}>
            <Button title={'Choose a video'} onPress={handleChooseVideo} />
          </View>
          <View style={{width: 300, marginTop: 10}}>
            <Button title={'Make a video'} onPress={handleMakeVideo} />
          </View>
        </View>
      </Modalize>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  cancelButton: {
    alignItems: 'center',
    flex: 1,
    borderColor: 'lightgray',
    borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 10,
  },
  postButton: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ff4040',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 10,
  },
  cancelButtonText: {
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postButtonText: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Upload;
