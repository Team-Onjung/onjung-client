import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {colors, width, height} from './utils/globalStyles';

const DATA1 = ['인기매물', '디지털기기', '생활가전', '가구/인테리어'];
const DATA2 = ['생활/주방', '유아동', '유아도서', '여성의류'];
const DATA3 = ['여성잡화', '남성패션/잡화', '뷰티/미용', '스포츠/레저'];
const DATA4 = ['도서', '반려동물용품', '식물', '기타'];

const Category = () => {
  return (
    <View style={styles.container_style}>
      <Text style={styles.header}> 카테고리 </Text>
      <FlatList
        horizontal
        data={DATA1}
        renderItem={({item}) => <Text style={styles.itemStyle}>{item}</Text>}
      />
      <FlatList
        horizontal
        data={DATA2}
        renderItem={({item}) => <Text style={styles.itemStyle}>{item}</Text>}
      />
      <FlatList
        horizontal
        data={DATA3}
        renderItem={({item}) => <Text style={styles.itemStyle}>{item}</Text>}
      />
      <FlatList
        horizontal
        data={DATA4}
        renderItem={({item}) => <Text style={styles.itemStyle}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors['$gray-9'],
  },

  header: {
    textAlign: 'center',
    fontSize: width * 21,
    letterSpacing: width * -0.24,
    fontWeight: 'bold',
    color: colors['$gray-1'],
    marginVertical: width * 26,
  },

  itemStyle: {
    flex: 1,
    width: width * 54,
    height: height * 54,
    borderRadius: 10,
    backgroundColor: colors.$white,
    justifyContent: 'space-around',
    alignItems: 'space-around',
    marginHorizontal: width * 6,
    textAlign: 'center',
  },

  text: {
    fontSize: width * 17,
    fontFamily: 'AppleSDGothicNeoM',
    color: colors['$gray-2'],
    fontWeight: 'bold',
  },
});

export default Category;
