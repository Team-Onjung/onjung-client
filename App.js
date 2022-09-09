import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Detail from './components/detail';
import RootStack from './screens/RootStack';
import {setCustomText} from 'react-native-global-props';
import {StyleSheet, View, Text, Image} from 'react-native';

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
