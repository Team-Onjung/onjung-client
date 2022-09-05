import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {width, colors, fonts} from './../../../../../utils/globalStyles';
import WonIcon from '../../../../../assets/icons/icon-won.svg';
import WonFocusIcon from '../../../../../assets/icons/icon-won-focused.svg';

const PostTextInput = ({
  title,
  secondText,
  onChangeText,
  value,
  multiline,
  icon,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <>
      {icon ? (
        <View style={styles.iconBox}>
          <WonIcon
            width={24}
            height={24}
            color={value || focused ? colors['$gray-2'] : colors['$gray-6']}
            style={styles.icon}
          />
          <TextInput
            style={[styles.withText, multiline && styles.multiline]}
            onChangeText={onChangeText}
            value={value}
            placeholder={title}
            placeholderTextColor={colors['$gray-6']}
            multiline={multiline}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <Text style={styles.secondText}>{secondText}</Text>
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
  // block: {flex: 1, flexDirection: 'row', justifyContent: 'space-between'},

  input: {
    padding: 0,
    margin: 0,
    marginHorizontal: width * 24,
    paddingVertical: width * 20,
    ...fonts.H4,
    color: colors['$gray-2'],
  },

  iconBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginLeft: width * 24,
    marginRight: width * 4,
    paddingTop: width * 19,
    paddingBottom: width * 21,
  },

  withText: {
    padding: 0,
    margin: 0,
    paddingVertical: width * 20,
    ...fonts.H4,
    color: colors['$gray-2'],
    flex: 1,
  },

  secondText: {
    paddingVertical: width * 20,
    marginRight: width * 24,
    color: colors['$gray-6'],
    fontSize: width * 17,
    fontFamily: 'AppleSDGothicNeoSB',
  },

  multiline: {
    fontFamily: 'AppleSDGothicNeoR',
    color: colors['$gray-5'],
    fontSize: width * 14,
  },
});

export default PostTextInput;
