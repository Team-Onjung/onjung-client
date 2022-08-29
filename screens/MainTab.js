import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detail from './../components/detail/index';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Home"
        component={}
        options={{title: '찜 목록', tabBarIcon: ({color, size}) => }}
      />
      <Tab.Screen
        name="Search"
        component={}
        options={{title: '찜 목록', tabBarIcon: ({color, size}) => }}
      />
      <Tab.Screen
        name="Post"
        component={}
        options={{title: '찜 목록', tabBarIcon: ({color, size}) => }}
      />
      <Tab.Screen
        name="Chat"
        component={}
        options={{title: '찜 목록', tabBarIcon: ({color, size}) => }}
      />
      <Tab.Screen
        name="Profile"
        component={}
        options={{title: '찜 목록', tabBarIcon: ({color, size}) => }}
      /> */}
    </Tab.Navigator>
  );
};

export default MainTab;
