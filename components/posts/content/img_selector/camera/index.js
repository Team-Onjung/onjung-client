import React, {useRef} from 'react';
import {View, Dimensions, ActivityIndicator} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';

const UseCamera = () => {
  const navigation = useNavigation();
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const cameraRef = useRef(null);

  return (
    <>
      {device != null && (
        <View>
          <Camera
            ref={cameraRef}
            style={{width: '100%', height: Dimensions.get('screen').height}}
            device={device}
            preset="medium"
            isActive={true}
            photo={true}
          />
        </View>
      )}
    </>
  );
};

export default UseCamera;
