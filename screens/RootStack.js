import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import Post from '../components/posts';
import {Text, TouchableOpacity, View} from 'react-native';
import PostAvailable from './../components/posts/post_availabe/index';
import PostRequest from './../components/posts/post_request/index';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {fontSize: 17, fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PostAvailable" component={PostAvailable} options />
      <Stack.Screen name="PostRequest" component={PostRequest} />
    </Stack.Navigator>
  );
};

export default RootStack;
