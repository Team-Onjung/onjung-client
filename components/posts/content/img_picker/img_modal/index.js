import React from 'react';
import {Modal, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {width, height, colors} from '../../../../../utils/globalStyles';

const ImgModal = ({visible, onClose, onLaunchCamera, onLaunchImageLibrary}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <Pressable style={styles.background} onPress={onClose}>
        <View style={styles.whiteBox}>
          <Pressable
            stlye={styles.actionButton}
            android_ripple={{color: colors.$white}}
            onPress={() => {
              onLaunchCamera();
              onClose();
            }}>
            <Text style={styles.text}>사진 촬영</Text>
          </Pressable>
          <Pressable
            stlye={styles.actionButton}
            android_ripple={{color: colors.$white}}
            onPress={() => {
              onLaunchImageLibrary();
              onClose();
            }}>
            <Text style={styles.text}>사진 선택</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    width: width * 300,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 2,
  },
  actionButton: {
    padding: width * 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: width * 8,
  },
  text: {
    fontSize: width * 17,
    color: colors['$gray-4'],
  },
});

export default ImgModal;
