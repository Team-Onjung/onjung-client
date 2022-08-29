import React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';

const PostAvailable = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: '물건 등록',
    });
  }, [navigation]);

  return <View></View>;
};

export default PostAvailable;
