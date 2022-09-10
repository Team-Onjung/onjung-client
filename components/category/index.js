import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const categoryName = [
  {
    id: 1,
    name: '인기매물',
  },
  {
    id: 2,
    name: '디지털기기',
  },
  {
    id: 3,
    name: '생활가전',
  },
  {
    id: 4,
    name: '가구/인테리어',
  },
  {
    id: 5,
    name: '생활/주방',
  },
  {
    id: 6,
    name: '유아동',
  },
  {
    id: 7,
    name: '유아도서',
  },
  {
    id: 8,
    name: '여성의류',
  },
  {
    id: 9,
    name: '여성잡화',
  },
  {
    id: 10,
    name: '남성패션/잡화',
  },
  {
    id: 11,
    name: '뷰티/미용',
  },
  {
    id: 12,
    name: '스포츠/레저',
  },
  {
    id: 13,
    name: '취미/게임/음반',
  },
  {
    id: 14,
    name: '도서',
  },
  {
    id: 15,
    name: '반려동물용품',
  },
  {
    id: 16,
    name: '식물',
  },
  {
    id: 17,
    name: '기타',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.name, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categoryName}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});

export default App;
