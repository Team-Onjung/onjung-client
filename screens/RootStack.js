import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import Post from '../components/posts';
import {Text, TouchableOpacity, View} from 'react-native';
import PostContent from './../components/posts/content/index';
import {width} from '../utils/globalStyles';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          // fontSize: width * 17로 했더니 '완료' 버튼이랑 크기 차이가 발생함
          fontSize: width * 18,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PostAvailable" component={PostContent} />
      <Stack.Screen name="PostRequest" component={PostContent} />
    </Stack.Navigator>
  );
};

export default RootStack;
