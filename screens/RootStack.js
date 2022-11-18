import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import PostContent from './../components/posts/content/index';
import {width} from '../utils/globalStyles';
import {colors} from './../utils/globalStyles';
import Detail from './../components/detail/index';
import {Platform} from 'react-native';
import UseCamera from '../components/posts/content/img_selector/camera';
import Category from '../components/category/index';
import SearchResult from '../components/search/searchResult/index';
import Chats from '../components/chat/chats/index';
import Talk from '../components/chat/talk';
import MyPage from '../components/myPage/index';
import Profile from '../components/profile/index';

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
      {/* Bottom Tab을 사용한 Main 화면 */}
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false, headerTitleAlign: 'center'}}
      />

      {/* Item 세부사항 */}
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTitleAlign: 'center',
        }}
      />

      {/* 물건 등록 */}
      <Stack.Screen
        name="PostAvailable"
        component={PostContent}
        options={{
          headerTitleAlign: 'center',
        }}
      />

      {/* 물건 요청 */}
      <Stack.Screen
        name="PostRequest"
        component={PostContent}
        options={{headerTitleAlign: 'center'}}
      />

      {/* 카메라 페이지 */}
      <Stack.Screen
        name="CameraPage"
        component={UseCamera}
        options={{headerTitleAlign: 'center'}}
      />

      {/* 카테고리 페이지 */}
      <Stack.Screen
        name="카테고리"
        component={Category}
        options={{
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTitleAlign: 'center',
        }}
      />
      {/* 검색결과 페이지 */}
      <Stack.Screen
        name="검색결과"
        component={SearchResult}
        options={{
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTitleAlign: 'center',
        }}
      />
      {/* 채팅목록 페이지 */}
      <Stack.Screen
        name="채팅목록"
        component={Chats}
        options={{
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTitleAlign: 'center',
        }}
      />
      {/* 채팅목록 페이지 */}
      <Stack.Screen
        name="채팅"
        component={Talk}
        options={{
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTitleAlign: 'center',
        }}
      />
      {/* 마이페이지 */}
      <Stack.Screen
        name="마이페이지"
        component={MyPage}
        options={{
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTitleAlign: 'center',
        }}
      />
      {/* 상대프로필 */}
      <Stack.Screen
        name="프로필"
        component={Profile}
        options={{
          headerShown: Platform.OS === 'ios' ? false : true,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
