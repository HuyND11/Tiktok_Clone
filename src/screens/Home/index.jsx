import {View, Text, RefreshControl, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Post from '../../components/Post';

import {useDispatch, useSelector} from 'react-redux';
import getPostData from './../../redux/posts/thunk';
import {store} from './../../redux/store';
import {FlatList} from 'react-native-gesture-handler';

function Home() {
  const dispatch = useDispatch();
  const myPost = useSelector(state => state.getPostToolkitReducer.data);

  const loading = useSelector(state => state.getPostToolkitReducer.loading);

  store.getState();

  useEffect(() => {
    dispatch(getPostData());
  }, []);

  const renderItem = ({item, index}) => {
    return <Post key={index} post={{item, index}} />;
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text>Empty</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        snapToInterval={Dimensions.get('window').height - 200}
        pagingEnabled
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
        data={myPost}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              setData(INITIAL_DATA);
            }}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Home;
