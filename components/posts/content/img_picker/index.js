import React, {useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CameraIcon from '../../../../assets/icons/icon-camera.svg';
import {width, height, colors} from '../../../../utils/globalStyles';
import ImgModal from './img_modal';
import CloseIcon from '../../../../assets/icons/icon-circle-close.svg';

const ImagePicker = ({form, setForm}) => {
  const [response, setResponse] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const imagePickerOption = {
    mediaType: 'photo',
    maxWidth: 768,
    maxHeight: 768,
    includeBase64: Platform.OS === 'android',
  };

  const onPickImage = res => {
    if (res.didCancel || !res) {
      return;
    }

    console.log(res);

    setResponse([...response, res]);

    setForm({...form, img: response});
  };

  const imgarray = [
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
    'file:///data/user/0/com.onjung_client/cache/rn_image_picker_lib_temp_bcbd48a9-d166-434e-8f75-33efb7815b81.jpg',
  ];

  const onLaunchCamera = () => {
    launchCamera(imagePickerOption, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  return (
    <View style={styles.block}>
      <ScrollView style={styles.imgArr} horizontal>
        <Pressable style={styles.picker} onPress={() => setModalVisible(true)}>
          <CameraIcon width={24} height={24} />
          {/* imgarray는 전부 response로  */}
          <Text style={styles.text}>{imgarray.length}/12</Text>
        </Pressable>
        {imgarray.map((res, idx) => (
          <View
            style={[styles.extra, idx === imgarray - 1 && styles.lastClose]}>
            <View style={styles.box}>
              {/* <View style={style.close}></View> */}
              <CloseIcon
                width={24}
                height={24}
                style={[
                  styles.close,
                  idx === imgarray.lenght - 1 && styles.lastClose,
                ]}
              />
              {/* uri: res?.assets[0]?.uri  */}
              <Image
                style={[
                  styles.img,
                  idx === imgarray.length - 1 && styles.lastImg,
                ]}
                source={{uri: res}}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      {/* <Image style={styles.box} source={{uri: response?.assets[0]?.uri}} /> */}
      <ImgModal
        visible={modalVisible}
        onLaunchCamera={onLaunchCamera}
        onLaunchImageLibrary={onLaunchImageLibrary}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingBottom: width * 24,
    paddingHorizontal: width * 24,
    overflow: 'visible',
  },

  imgArr: {flexDirection: 'row', overflow: 'visible'},

  extra: {paddingTop: width * 24},

  box: {position: 'relative'},

  img: {
    width: width * 62,
    aspectRatio: 1,
    borderRadius: 10,
    marginHorizontal: width * 8,
  },

  lastImg: {
    marginRight: 0,
  },

  close: {
    position: 'absolute',
    top: width * -6,
    right: 0,
    zIndex: 99,
    padding: 2,
    // transform: [{translateY: -24}, {translateX: 24}],
  },

  lastClose: {
    right: width * -8,
  },

  picker: {
    width: width * 62,
    aspectRatio: 1,
    borderRadius: 10,
    marginTop: width * 24,
    backgroundColor: colors['$coral-1'],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 8,
  },

  text: {
    fontSize: width * 11,
    color: colors['$coral-4'],
    letterSpacing: width * -0.15,
  },
});

export default ImagePicker;
