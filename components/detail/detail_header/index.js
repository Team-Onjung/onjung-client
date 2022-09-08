import React from 'react';
import {StyleSheet, View} from 'react-native';
import {height, width} from '../../../utils/globalStyles';
import ArrowLeftIcon from '../../../assets/icons/icon-arrow-left.svg';

const DetailHeader = () => {
  return (
    <View style={styles.block}>
      <ArrowLeftIcon width={24} height={24} />
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
