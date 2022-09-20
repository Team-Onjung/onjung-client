import {useEffect} from 'react';
import {Platform, View} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const askPermission = async () => {
  const platformPermissions =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const requestPermission = () => {
    request(platformPermissions).then(response => console.log(response));
  };

  const checkPermission = () => {
    check(platformPermissions)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log('PERMISSION ERROR : ', error);
      });
  };

  // useEffect(() => {
  //   const permissionCheck = () => {
  //     if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
  //       return;
  //     }

  //     const platformPermissions =
  //       Platform.OS === 'ios'
  //         ? PERMISSIONS.IOS.CAMERA
  //         : PERMISSIONS.ANDROID.CAMERA;

  //     const requestCameraPermission = async () => {
  //       try {
  //         const result = await request(platformPermissions).then(response =>
  //           console.log(response),
  //         );
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     };
  //   };
  // }, []);

  return <View></View>;
};
