import React from 'react';
import {StyleSheet, View} from 'react-native';
import {height, width} from '../../../utils/globalStyles';
import {ArrowLeftIcon} from '../../svg';

const DetailHeader = () => {
  return (
    <View style={styles.block}>
      <ArrowLeftIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingLeft: width * 24,
    paddingVertical: height * 8,
    position: 'absolute',
    top: 0,
    zIndex: 9999,
  },
});

export default DetailHeader;
