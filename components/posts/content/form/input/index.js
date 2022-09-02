import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {width, height, colors} from './../../../../../utils/globalStyles';

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
    marginHorizontal: width * 20,
  },

  text: {
    marginLeft: width * 4,
    fontFamily: 'AppleSDGothicNeoB',
    letterSpacing: width * -0.15,
  },

  gray: {
    color: colors['$gray-6'],
    fontSize: width * 17,
  },

  black: {
    flex: 1,
    color: colors['$gray-2'],
    fontSize: width * 15,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors['$gray-6'],
    paddingBottom: 0,
  },

  margin: {
    marginBottom: width * 16,
  },
});

export default PostTextInput;
