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

  const onLaunchCamera = () => {
    launchCamera(imagePickerOption, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  return (
    <View style={styles.block}>
      <ScrollView style={styles.imgArr} horizontal>
        <Pressable style={styles.box} onPress={() => setModalVisible(true)}>
          <CameraIcon width={24} height={24} />

          <Text style={styles.text}>{response.length}/12</Text>
        </Pressable>
        {response.map((res, idx) => (
          <View style={styles.imgBox}>
            {/* <View style={style.close}></View> */}
            <CloseIcon width={24} height={24} style={styles.close} />
            <Image
              style={[
                styles.img,
                idx === response.length - 1 && styles.lastImg,
              ]}
              source={{uri: res?.assets[0]?.uri}}
            />
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
    paddingVertical: width * 24,
    paddingHorizontal: width * 24,
    overflow: 'visible',
  },

  imgArr: {flexDirection: 'row', overflow: 'visible'},

  img: {
    width: width * 62,
    aspectRatio: 1,
    borderRadius: 10,
    marginHorizontal: width * 8,
  },

  lastImg: {
    marginRight: 0,
  },

  imgBox: {position: 'relative', overflow: 'visible', justifyContent: 'center'},

  box: {
    width: width * 62,
    aspectRatio: 1,
    borderRadius: 10,
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

  close: {
    position: 'absolute',
    top: width * -8,
    right: 0,
    zIndex: 99,
    padding: 2,
    // transform: [{translateY: -24}, {translateX: 24}],
  },
});

export default ImagePicker;
