import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Post = navigation => {
  return (
    <View style={styles.block}>
      <Pressable
        style={styles.box}
        onPress={navigation.navigate('PostAvailable')}>
        <Text>Post Available</Text>
      </Pressable>
      <Pressable
        style={[styles.box, {marginLeft: 20}]}
        onPress={navigation.navigate('PostRequest')}>
        <Text>Post Request</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  box: {
    flex: 1,
    width: 128,
    height: 128,
    backgroundColor: '#9e9e9e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Post;
