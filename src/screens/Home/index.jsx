import {View, Text, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import Post from '../../components/Post';

import {useDispatch, useSelector} from 'react-redux';
import getPostData from './../../redux/posts/thunk';
import {store} from './../../redux/store';
import {FlatList} from 'react-native-gesture-handler';
import {POST_HEIGHT} from '../../utils/Constants';
import {DotIndicator} from 'react-native-indicators';

function Home() {
  const dispatch = useDispatch();
  const myPost = useSelector(state => state.getPostToolkitReducer.data);

  const loading = useSelector(state => state.getPostToolkitReducer.loading);

  store.getState();

  useEffect(() => {
    dispatch(getPostData());
  }, []);

  const renderItem = item => {
    return <Post key={item?.id} post={item.item} />;
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text>Empty Demo</Text>
      </View>
    );
  };

  console.log('myPost => ', myPost);

  return (
    <View
      style={{
        position: 'relative',
      }}>
      {!!loading ? (
        <View
          style={{
            position: 'absolute',
            top: 350,
            left: 125,
          }}>
          <DotIndicator color="white" />
        </View>
      ) : (
        <FlatList
          snapToInterval={POST_HEIGHT}
          pagingEnabled
          ListEmptyComponent={renderEmpty}
          renderItem={renderItem}
          data={myPost}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                dispatch(getPostData());
              }}
            />
          }
        />
      )}
    </View>
  );
}

export default Home;
