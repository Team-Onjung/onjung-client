import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import PostContent from './../components/posts/content/index';
import {width} from '../utils/globalStyles';
import {colors} from './../utils/globalStyles';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontSize: width * 17,
          fontWeight: 'bold',
          color: colors['$gray-2'],
        },
      }}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="PostAvailable"
        component={PostContent}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="PostRequest"
        component={PostContent}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
