import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, height, colors} from '../../utils/globalStyles';

const Post = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.block}>
      <Text style={styles.title}>어떤 게시글을 등록하시겠습니까?</Text>
      <View style={styles.pressables}>
        <Pressable
          style={styles.box}
          onPress={() =>
            navigation.navigate('PostAvailable', {title: '물건 등록'})
          }>
          <Text style={styles.text}>물건 등록</Text>
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('PostAvailable', {title: '물건 요청'})
          }>
          <Text style={styles.text}>물건 요청</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors['$gray-9'],
  },

  title: {
    fontSize: width * 21,
    letterSpacing: width * -0.24,
    fontWeight: 'bold',
    color: colors['$gray-1'],
  },

  pressables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 10,
    marginTop: width * 35,
  },

  box: {
    flex: 1,
    width: width * 157,
    height: height * 194,
    borderRadius: 20,
    backgroundColor: colors.$white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 6,

    ...Platform.select({
      ios: {
        shadowColor: '#142742',
        shadowOpacity: 0.07,
        shadowRadius: 25,
        shadowOffset: {
          height: 2,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },

  text: {
    fontSize: width * 17,
    fontFamily: 'AppleSDGothicNeoM',
    color: colors['$gray-2'],
    fontWeight: 'bold',
  },
});

export default Post;
