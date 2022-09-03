import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CameraIcon from '../../../../assets/icons/icon-camera.svg';
import {width, height, colors} from '../../../../utils/globalStyles';
import {Icon} from '../../../svg';
import ImgModal from './img_modal';
import {Path, Svg, SvgXml} from 'react-native-svg';
import {Camera} from '../../../../assets/icons';

const ImagePicker = ({img, setForm}) => {
  const [response, setResponse] = useState(null);
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

    setResponse(res);
  };

  const onLaunchCamera = () => {
    launchCamera(imagePickerOption, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  return (
    <View style={styles.block}>
      <Pressable style={styles.box} onPress={() => setModalVisible(true)}>
        <CameraIcon width={24} height={25} />

        <Text style={styles.text}>0/12</Text>
      </Pressable>
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
  },

  box: {
    width: width * 62,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: colors['$coral-1'],
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: width * 11,
    color: colors['$coral-4'],
    letterSpacing: width * -0.15,
  },

  img: {
    flex: 1,
  },
});

export default ImagePicker;
