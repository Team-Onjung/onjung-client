import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {width, colors, fonts} from './../../../../../utils/globalStyles';
import WonIcon from '../../../../../assets/icons/icon-won.svg';

const PostTextInput = ({title, onChangeText, value, multiline, icon}) => {
  return (
    <>
      {icon ? (
        <View>
          <WonIcon width={24} height={24} />
        </View>
      ) : (
        <TextInput
          style={[styles.input, multiline && styles.multiline]}
          onChangeText={onChangeText}
          value={value}
          placeholder={title}
          placeholderTextColor={colors['$gray-6']}
          multiline={multiline}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 0,
    margin: 0,
    marginHorizontal: width * 24,
    paddingVertical: width * 20,
    ...fonts.H4,
    color: colors['$gray-2'],
  },

  multiline: {
    fontFamily: 'AppleSDGothicNeoR',
    color: colors['$gray-5'],
    fontSize: width * 14,
  },
});

export default PostTextInput;
