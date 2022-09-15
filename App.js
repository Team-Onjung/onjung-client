import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import RootStack from './screens/RootStack';
import {setCustomText} from 'react-native-global-props';
import Category from './components/category/index';
import {Alert, BackHandler} from 'react-native';

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'AppleSDGothicNeoM',
    },
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('온정을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        {text: '확인', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  setCustomText(customTextProps);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
