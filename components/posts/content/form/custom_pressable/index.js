import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, fonts, width} from '../../../../../utils/globalStyles';

const CustomPressable = ({children, onPress}) => {
  return (
    <Pressable style={styles.block} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
      <Text>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: width * 8,
    paddingVertical: width * 5,
    backgroundColor: colors['$coral-1'],
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textBox: {
    paddingHorizontal: width * 8,
  },

  text: {
    paddingHorizontal: width * 8,
    color: colors['$gray-4'],
    ...fonts.H5,
  },
});

export default CustomPressable;
