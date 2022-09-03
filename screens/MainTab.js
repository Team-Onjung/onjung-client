import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detail from './../components/detail/index';
import Post from '../components/posts';
import {Text, TouchableOpacity} from 'react-native';
import Main from './../components/main/index';
import Search from './../components/search/index';
import Chat from './../components/chat/index';
import Profile from '../components/profile';
import {colors, width} from './../utils/globalStyles';

const Tab = createBottomTabNavigator();

const MainTab = navigation => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 81, backgroundColor: colors.$white},
        tabBarActiveTintColor: colors.$primary,
        tabBarInactiveTintColor: colors['$gray-5'],
        tabBarLabelStyle: {
          fontWeight: 'bold',
          lineHeight: width * 20,
          letterSpacing: width * -0.24,
          fontSize: width * 11,
          fontFamily: 'AppleSDGothicNeoM',
        },
      }}>
      <Tab.Screen name="Home" component={Main} options={{title: '정 나눔'}} />
      <Tab.Screen name="Search" component={Search} options={{title: '검색'}} />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          title: '등록',
          headerShown: false,
        }}
      />
      <Tab.Screen name="Chat" component={Chat} options={{title: '채팅'}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: '마이페이지'}}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
