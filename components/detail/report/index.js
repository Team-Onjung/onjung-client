import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {fonts, width} from '../../../utils/globalStyles';
import {ArrowRightIcon} from '../../svg';
import {colors} from './../../../utils/globalStyles';

const Report = () => {
  return (
    <Pressable onPress={() => console.log('report')} style={styles.block}>
      <Text style={styles.text}>이 게시글 신고하기</Text>
      <ArrowRightIcon style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    marginHorizontal: width * 24,
    marginVertical: width * 31,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    marginRight: width * 24,
    ...fonts.H5,
    color: colors['$gray-3'],
  },

  icon: {
    paddingLeft: width * 8,
  },
});

export default Report;
