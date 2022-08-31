import React, {useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {COLOR} from '../../../../utils/color';

const ImagePicker = () => {
  const [response, setResponse] = useState(null);
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) {
          return;
        }

        setResponse(res);
      },
    );
  };

  console.log(response?.assets[0]?.uri);
  return (
    <View style={styles.block}>
      <Pressable style={styles.box} onPress={onSelectImage}>
        <Image style={styles.box} source={{uri: response?.assets[0]?.uri}} />
        <Text>Image Picker</Text>
      </Pressable>
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
