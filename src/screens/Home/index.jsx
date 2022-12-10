import {View, Text, RefreshControl, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Post from '../../components/Post';

import {useDispatch, useSelector} from 'react-redux';
import getPostData from './../../redux/posts/thunk';
import {store} from './../../redux/store';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();
  const myPost = useSelector(state => state.getPostToolkitReducer.data);

  const loading = useSelector(state => state.getPostToolkitReducer.loading);

  // store.getState();

  console.log('myPost => ', myPost);

  useEffect(() => {
    // dispatch(getPostData());
    console.log('UseEffect');
    axios
      .get('https://61bc10c1d8542f001782453b.mockapi.io/post')
      .then(res => {
        console.log('Data =>', res.data);
      })
      .catch(error => {
        console.log(error);
      });
    // fetch('https://61bc10c1d8542f001782453b.mockapi.io/post')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(console.log);
  }, []);

  const renderItem = ({item, index}) => {
    return <Post key={index} post={{item, index}} />;
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text>Empty Demo</Text>
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
              setData(myPost);
            }}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Home;
