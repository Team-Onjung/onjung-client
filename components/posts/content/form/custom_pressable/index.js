import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, fonts, width} from '../../../../../utils/globalStyles';
import DropIcon from '../../../../../assets/icons/icon-drop-down.svg';

const CustomPressable = ({children, onPress, date}) => {
  return (
    <Pressable style={[styles.block, date && styles.date]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
      <DropIcon width={16} height={16} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: width * 8,
    paddingVertical: width * 5,
    backgroundColor: colors['$gray-9'],
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBox: {
    paddingHorizontal: width * 8,
  },

  text: {
    paddingHorizontal: width * 8,
    color: colors['$gray-4'],
    ...fonts.H5,
  },

  date: {
    width: width * 128,
  },
});

export default CustomPressable;
