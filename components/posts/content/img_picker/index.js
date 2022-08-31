import React, {useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {COLOR} from '../../../../utils/color';
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
        <Text>Image Picker</Text>
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
  },

  box: {
    width: 62,
    aspectRatio: 1,
    borderRadius: 10,
  },

  img: {
    flex: 1,
  },
});

export default ImagePicker;
