import React, {useLayoutEffect} from 'react';
import {Button, Text, View, Pressable, StyleSheet} from 'react-native';
import {COLOR} from '../../../utils/color';
import PostTextInput from '../postTextInput';

const PostAvailable = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${route.params.title}`,
      headerRight: () => (
        <Pressable onPress={() => console.log('hi')}>
          <Text style={styles.complete}>완료</Text>
        </Pressable>
      ),
    });
  });

  return (
    <View style={styles.block}>
      <PostTextInput text={'글 제목'} isGray={true} hasMarginBottom />
      <PostTextInput text={'카테고리 선택'} isGray={false} hasMarginBottom />
      <PostTextInput
        text={'\u{20A9} 일당 가격'}
        isGray={true}
        hasMarginBottom
      />
      <PostTextInput text={'내용'} isGray={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  complete: {
    color: COLOR.$primary,
    fontWeight: 'bold',
    letterSpacing: -0.24,
    lineHeight: 20,
    fontSize: 17,
  },

  block: {
    flex: 1,
  },
});

export default PostAvailable;
