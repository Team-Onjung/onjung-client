import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Detail from './components/detail';
import RootStack from './screens/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
