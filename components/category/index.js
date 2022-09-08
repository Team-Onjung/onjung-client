import React from 'react';
import {StatusBar, StyleSheet, Text, View, FlatList} from 'react-native';

//Static data to displaty in list
const DATA = [
  '인기매물',
  '디지털기기',
  '생활가전',
  '가구/인테리어',
  '생활/주방',
  '유아동',
  '유아도서',
  '여성의류',
  '여성잡화',
  '남성패션/잡화',
  '뷰티/미용',
  '스포츠/레저',
  '취미/게임/음반',
  '도서',
  '반려동물용품',
  '식물',
  '기타',
];

const Category = () => {
  return (
    <View style={styles.container_style}>
      <Text style={styles.header}> 카테고리 </Text>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => <Text style={styles.item_style}>{item}</Text>}
      />
    </View>
  );
};

//Styles
const styles = StyleSheet.create({
  container_style: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item_style: {
    backgroundColor: '#B591FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#B2C2D2',
    padding: 20,
    fontSize: 20,
  },
});
export default Category;
