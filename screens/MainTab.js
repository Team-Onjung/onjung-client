import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Post from '../components/posts';
import Main from './../components/main/index';
import Search from './../components/search/index';
import Chat from './../components/chat/index';
import Profile from '../components/profile';
import {colors, height, width} from './../utils/globalStyles';
import HomeIcon from '../assets/icons/tabBar_icons/icon-home.svg';
import MonoHomeIcon from '../assets/icons/tabBar_icons-mono/icon-home-mono.svg';
import SearchIcon from '../assets/icons/tabBar_icons/icon-search.svg';
import MonoSearchIcon from '../assets/icons/tabBar_icons-mono/icon-search-mono.svg';
import PlusIcon from '../assets/icons/tabBar_icons/icon-plus.svg';
import MonoPlusIcon from '../assets/icons/tabBar_icons-mono/icon-plus-mono.svg';
import ChatIcon from '../assets/icons/tabBar_icons/icon-chat.svg';
import MonoChatIcon from '../assets/icons/tabBar_icons-mono/icon-chat-mono.svg';
import ProfileIcon from '../assets/icons/tabBar_icons/icon-profile.svg';
import MonoProfileIcon from '../assets/icons/tabBar_icons-mono/icon-profile-mono.svg';

const Tab = createBottomTabNavigator();

const MainTab = navigation => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: height * 88,
          backgroundColor: colors.$white,
          justifyContent: 'center',
        },
        tabBarActiveTintColor: colors['$coral-4'],
        tabBarInactiveTintColor: colors['$gray-5'],
        tabBarLabelStyle: {
          fontWeight: 'bold',
          lineHeight: width * 20,
          letterSpacing: width * -0.24,
          fontSize: width * 11,
          fontFamily: 'AppleSDGothicNeoM',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          title: '정 나눔',
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeIcon width={32} height={32} />
            ) : (
              <MonoHomeIcon width={32} height={32} />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: '검색',
          tabBarIcon: ({focused}) =>
            focused ? (
              <SearchIcon width={33} height={32} />
            ) : (
              <MonoSearchIcon width={33} height={32} />
            ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          title: '등록',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <PlusIcon width={33} height={32} />
            ) : (
              <MonoPlusIcon width={33} height={32} />
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: '채팅',
          tabBarIcon: ({focused}) =>
            focused ? (
              <ChatIcon width={33} height={32} />
            ) : (
              <MonoChatIcon width={33} height={32} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '마이페이지',
          tabBarIcon: ({focused}) =>
            focused ? (
              <ProfileIcon width={33} height={32} />
            ) : (
              <MonoProfileIcon width={33} height={32} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
