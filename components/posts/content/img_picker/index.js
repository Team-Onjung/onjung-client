import React, {useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {width, height, colors} from '../../../../utils/globalStyles';
import ImgModal from './img_modal';

const ImagePicker = () => {
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
        <Image style={styles.box} source={{uri: response?.assets[0]?.uri}} />
      </Pressable>
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
  },

  img: {
    flex: 1,
  },
});

export default ImagePicker;
