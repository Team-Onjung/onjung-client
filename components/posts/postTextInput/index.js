import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLOR} from './../../../utils/color';

const PostTextInput = ({text, isGray, hasMarginBottom}) => {
  return (
    <View style={styles.block}>
      <Text style={[styles.text, isGray ? styles.gray : styles.black]}>
        {text}
      </Text>
      <TextInput style={[styles.input, hasMarginBottom && {marginBottom: 8}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},

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
  },
});

export default PostTextInput;
