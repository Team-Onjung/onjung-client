import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, width} from '../../../utils/globalStyles';
import {HeartIcon} from '../../svg';

const ChatButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonBox}>
        <View style={styles.heartBox}>
          <HeartIcon />
          <Text style={styles.heartText}>317</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>채팅하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    bottom: 0,
    paddingLeft: width * 24,
    paddingTop: width * 17,
    paddingBottom: width * 40,
    backgroundColor: colors.$white,

    ...Platform.select({
      ios: {
        shadowColor: '#262D3E',
        shadowOpacity: 0.13,
        shadowOffset: {
          height: 2,
          width: 0,
        },
      },
      android: {elevation: 15},
    }),
  },

  buttonBox: {
    flexDirection: 'row',
    marginLeft: width * 4,
    alignItems: 'center',
  },

  button: {
    flex: 1,
    backgroundColor: colors['$coral-4'],
    marginLeft: width * 7,
    marginRight: width * 24,
    paddingVertical: width * 11,
    borderRadius: width * 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'AppleSDGothicNeoM',
    fontSize: width * 16,
    letterSpacing: width * -0.53,
    color: colors.$white,
  },

  heartBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: width * 12,
  },

  heart: {},

  heartText: {
    fontFamily: 'AppleSDGothicNeoSB',
    fontSize: width * 13,
    color: colors['$gray-5'],
  },
});

export default ChatButton;
