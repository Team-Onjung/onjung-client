import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Post = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.block}>
      <Pressable
        style={styles.box}
        onPress={() =>
          navigation.navigate('PostAvailable', {title: '물건 등록'})
        }>
        <Text style={styles.text}>Post Available</Text>
      </Pressable>
      <Pressable
        style={[styles.box]}
        onPress={() =>
          navigation.navigate('PostAvailable', {title: '물건 요청'})
        }>
        <Text style={styles.text}>Post Request</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box: {
    flex: 1,
    width: 128,
    height: 128,
    backgroundColor: '#9e9e9e',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  text: {
    fontSize: 20,
    fontFamily: 'AppleSDGothicNeoM',
  },
});

export default Post;
