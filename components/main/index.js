import React from 'react';
import {Button, View} from 'react-native';

const Main = ({navigation}) => {
  return (
    <View>
      <Button title="to Detail" onPress={() => navigation.navigate('Detail')} />
      <Button
        title="to Camera"
        onPress={() => navigation.navigate('PermissionPage')}
      />
    </View>
  );
};

export default Main;
