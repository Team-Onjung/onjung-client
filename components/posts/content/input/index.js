import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLOR} from '../../../../utils/color';

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
  block: {flex: 1},

  text: {
    fontFamily: 'AppleSDGothicNeoB',
    marginHorizontal: 20,
    letterSpacing: -0.15,
  },

  gray: {
    color: COLOR['$gray-6'],
    fontSize: 17,
  },

  black: {
    color: '#333d48',
    fontSize: 17,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR['$gray-6'],
    marginHorizontal: 24,
    height: 48,
  },

  margin: {
    marginBottom: 8,
  },
});

export default PostTextInput;
