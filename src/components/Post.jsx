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

function Post({post}) {
  const [paused, setPaused] = useState(false);

  const onPlayPauseVideo = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPauseVideo}>
        <Video
          source={{uri: post?.item?.videoURL}}
          onError={e => console.log(e)}
          style={styles.video}
          resizeMode="cover"
          autoplay={true}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <ReactBar isLove={post.item.isLove} avatar={post.item.author.avatar} />
        <VideoDescription
          desc={post.item.description}
          name={post.item.author.name}
          songName={post.item.songName}
          songImage={post.item.songImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    // paddingBottom: 45,
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
