import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {colors, fonts, height, width} from '../../../utils/globalStyles';
import {FaceIcon} from '../../svg';

const UserBox = ({img, name, location, comment, rate}) => {
  return (
    <View style={styles.block}>
      <View style={styles.user}>
        <Image style={styles.img} source={img} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>
            {location} • {comment}
          </Text>
        </View>
      </View>
      <View style={styles.rateBox}>
        <FaceIcon />
        <Text style={styles.rate}>정 {rate.toFixed(1)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 24,
    marginVertical: height * 18,
  },

  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  img: {
    borderRadius: width * 22,
    aspectRatio: 1,
    width: width * 44,
    height: height * 44,
    backgroundColor: colors['$gray-8'],
  },

  content: {
    justifyContent: 'center',
    paddingLeft: width * 12,
  },

  name: {
    ...fonts.H5,
    color: colors['$gray-3'],
    marginBottom: width * 3,
    textAlignVertical: 'top',
  },

  desc: {...fonts.H7, color: colors['$gray-5']},

  rateBox: {
    width: width * 88,
    height: height * 32,
    borderRadius: width * 40,
    paddingLeft: width * 5,
    paddingRight: width * 12,
    paddingVertical: width * 4,
    borderColor: colors['$coral-3'],
    borderWidth: width * 1.3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  rate: {
    paddingLeft: width * 8,
    fontFamily: 'AppleSDGothicNeoB',
    fontSize: width * 16,
    letterSpacing: width * -0.5,
    color: colors['$coral-4'],
  },
});

export default UserBox;
