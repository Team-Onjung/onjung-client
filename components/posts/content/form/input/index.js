import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLOR} from '../../../../../utils/color';

const PostTextInput = ({
  title,
  isGray,
  hasMarginBottom,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.block}>
      <Text style={[styles.text, isGray ? styles.gray : styles.black]}>
        {title}
      </Text>
      <TextInput
        style={[styles.input, hasMarginBottom && styles.margin]}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    marginHorizontal: 20,
  },

  text: {
    marginLeft: 4,
    fontFamily: 'AppleSDGothicNeoB',
    letterSpacing: -0.15,
  },

  gray: {
    color: COLOR['$gray-6'],
    fontSize: 17,
  },

  black: {
    flex: 1,
    color: COLOR['$gray-2'],
    fontSize: 15,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR['$gray-6'],
    paddingBottom: 0,
  },

  margin: {
    marginBottom: 16,
  },
});

export default PostTextInput;
