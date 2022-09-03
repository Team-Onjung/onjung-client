import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {width, colors, fonts} from './../../../../../utils/globalStyles';

const PostTextInput = ({title, hasMarginBottom, onChangeText, value}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={title}
      placeholderTextColor={colors['$gray-6']}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: width * 24,
    paddingVertical: width * 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors['$gray-6'],
    ...fonts.H4,
  },
});

export default PostTextInput;
