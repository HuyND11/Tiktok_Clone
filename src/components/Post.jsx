import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import VideoDescription from './VideoDescription';
import ReactBar from './ReactBar';
import {POST_HEIGHT} from '../utils/Constants';

function Post({post}) {
  const [paused, setPaused] = useState(true);

  const onPlayPauseVideo = () => {
    setPaused(!paused);
  };

  useEffect;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPauseVideo}>
        <Video
          source={{uri: post?.videoURL}}
          onError={e => console.log(e)}
          style={styles.video}
          resizeMode="cover"
          autoplay={true}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <ReactBar
          isLove={post?.isLove}
          love={post?.like}
          share={post?.share}
          avatar={post?.author.avatar}
        />
        <VideoDescription
          desc={post?.description}
          name={post?.author.name}
          songName={post?.songName}
          songImage={post?.songImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'pink',
    height: POST_HEIGHT,
  },

  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
});

export default Post;
