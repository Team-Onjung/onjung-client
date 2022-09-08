import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, width} from '../../../../utils/globalStyles';

const PricePreview = ({title, desc, value, unit}) => {
  return (
    <View style={styles.block}>
      <View style={styles.descBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Text style={styles.value}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: width * 8,
    paddingBottom: width * 14,
    paddingHorizontal: width * 24,
  },

  descBox: {paddingRight: width * 16},

  title: {...fonts.H5, color: colors['$gray-3']},

  desc: {
    fontFamily: 'AppleSDGothicNeoR',
    fontSize: width * 12,
    color: colors['$gray-5'],
    lineHeight: width * 20,
    letterSpacing: width * -0.24,
  },

  valueBox: {},

  value: {
    paddingBottom: width * 22,
    paddingLeft: width * 8,
    fontFamily: 'AppleSDGothicNeoB',
    fontSize: width * 19,
    lineHeight: width * 20,
    letterSpacing: width * -0.24,
    color: colors['$gray-2'],
  },
});

export default PricePreview;
