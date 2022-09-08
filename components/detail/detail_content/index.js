import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, width} from '../../../utils/globalStyles';

const DetailContent = ({title, category, status, rental_fee, content}) => {
  return (
    <View style={styles.block}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
      <View style={styles.categoryBox}>
        <Text style={styles.category}>{category} • 1분 전</Text>
      </View>
      <View style={styles.priceBox}>
        <Text style={styles.price}>
          {Number(rental_fee).toLocaleString('ko-KR')}원
        </Text>
        <Text style={styles.pricePlaceholder}>/일</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: width * 24,
    paddingTop: width * 32,
    paddingBottom: width * 40,
  },

  titleBox: {flexDirection: 'row', justifyContent: 'space-between'},

  title: {
    ...fonts.H2,
    color: colors['$gray-2'],
  },

  statusBox: {
    paddingHorizontal: width * 10,
    paddingTop: width * 6,
    paddingBottom: width * 5,
    marginLeft: width * 16,
    backgroundColor: colors['$coral-4'],
    borderRadius: width * 6.36,
  },

  statusText: {
    color: colors.$white,
    fontFamily: 'AppleSDGothicNeoSB',
    fontSize: width * 12,
  },

  categoryBox: {paddingBottom: width * 6},

  category: {...fonts.H7, color: colors['$gray-5']},

  priceBox: {
    paddingTop: width * 10,
    paddingBottom: width * 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {...fonts.H3, color: colors['$gray-2'], marginRight: width * 4},

  pricePlaceholder: {...fonts.H5, color: colors['$gray-4']},

  content: {
    paddingTop: width * 24,
    fontFamily: 'AppleSDGothicNeoR',
    fontSize: width * 15,
    color: colors['$gray-4'],
  },
});

export default DetailContent;
