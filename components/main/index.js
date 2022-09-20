import React from 'react';
import {Button, View} from 'react-native';
import {request} from 'react-native-permissions';
import {cameraPermissions} from '../config/platform';

const Main = ({navigation}) => {
  const requestPermission = () => {
    request(cameraPermissions).then(navigation.navigate('CameraPage'));
  };

  return (
    <View>
      <Button title="to Detail" onPress={() => navigation.navigate('Detail')} />
      <Button title="to Camera" onPress={requestPermission} />
    </View>
  );
};

export default Main;
