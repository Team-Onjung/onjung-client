import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../../../../utils/color';

const ImgModal = ({visible, onClose}) => {
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
            android_ripple={{color: COLOR.$white}}>
            <Text style={styles.actionText}>사진 촬영</Text>
          </Pressable>
          <Pressable
            stlye={styles.actionButton}
            android_ripple={{color: COLOR.$white}}>
            <Text style={styles.actionText}>사진 선택</Text>
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
    width: 300,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 2,
  },
  actionButton: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default ImgModal;
