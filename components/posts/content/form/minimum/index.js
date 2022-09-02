import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, width} from './../../../../../utils/globalStyles';

const MinimumRentDate = () => {
  return (
    <>
      <Pressable style={styles.box} onPress={() => console.log('minimum')}>
        <Text>7일</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},

  box: {
    borderRadius: 5,
    backgroundColor: colors['$gray-6'],
  },

  text: {
    fontSize: width * 15,
    letterSpacing: width * -0.15,
  },
});

export default MinimumRentDate;
