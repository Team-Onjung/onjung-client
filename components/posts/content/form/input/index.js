import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {width, colors, fonts} from './../../../../../utils/globalStyles';

const PostTextInput = ({title, onChangeText, value, multiline}) => {
  return (
    <TextInput
      style={[styles.input, multiline && styles.multiline]}
      onChangeText={onChangeText}
      value={value}
      placeholder={title}
      placeholderTextColor={colors['$gray-6']}
      multiline={multiline}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 0,
    margin: 0,
    marginHorizontal: width * 24,
    paddingVertical: width * 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors['$gray-6'],
    ...fonts.H4,
  },

  multiline: {
    fontFamily: 'AppleSDGothicNeoR',
    color: colors['$gray-5'],
    fontSize: width * 14,
  },
});

export default PostTextInput;
