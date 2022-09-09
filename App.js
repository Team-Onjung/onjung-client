import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Detail from './components/detail';
import RootStack from './screens/RootStack';
import {setCustomText} from 'react-native-global-props';
import Category from './components/category/index';

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'AppleSDGothicNeoM',
    },
  };

  setCustomText(customTextProps);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
