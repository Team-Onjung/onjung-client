import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HashTag = ({item}) => {
  // console.log(item);
  return (
    <View style={styles.block}>
      {item.map(i => (
        <View style={styles.box} key={i}>
          <Text style={styles.text}># {i}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
    marginBottom: 32,
  },

  box: {
    backgroundColor: '#e1e1e1',
    borderRadius: 3,
    marginRight: 8,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },

  text: {
    fontSize: 10,
    fontWeight: 'bold',
    // color:
  },
});

export default HashTag;
