import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {width, colors} from '../../../../../utils/globalStyles';
import {MonoCameraIcon, PhtohIcon} from '../../../../svg';

const ImgModal = ({visible, onClose, onLaunchCamera, onLaunchImageLibrary}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <Pressable style={styles.background} onPress={onClose}>
        <View style={styles.whiteBox}>
          <Pressable
            style={styles.actionButton}
            android_ripple={{color: colors.$white}}
            onPress={() => {
              onLaunchCamera();
              onClose();
            }}>
            <MonoCameraIcon />
            <Text style={styles.text}>사진 촬영</Text>
          </Pressable>
          <Pressable
            style={styles.actionButton}
            android_ripple={{color: colors.$white}}
            onPress={() => {
              onLaunchImageLibrary();
              onClose();
            }}>
            <PhtohIcon />
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
    marginLeft: width * 8,
  },
});

export default ImgModal;
