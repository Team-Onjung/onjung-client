import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Post from '../components/posts';
import Main from './../components/main/index';
import Search from './../components/search/index';
import Chat from './../components/chat/index';
import Profile from '../components/profile';
import {colors, height, width} from './../utils/globalStyles';

const Tab = createBottomTabNavigator();

const MainTab = navigation => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: height * 88, backgroundColor: colors.$white},
        tabBarActiveTintColor: colors['$coral-3'],
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
