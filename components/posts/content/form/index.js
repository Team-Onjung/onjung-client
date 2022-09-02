import React from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from './date_picker/index';
import PostTextInput from './input/index';

const PostForm = ({form, setForm, routeName}) => {
  const onFormTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  return (
    <View style={styles.block}>
      <PostTextInput
        title={'글 제목'}
        value={form.title}
        onChangeText={onFormTextHandler('title')}
        isGray={true}
        hasMarginBottom
      />
      <PostTextInput
        title={'카테고리 선택'}
        value={form.category}
        onChangeText={onFormTextHandler('category')}
        isGray={false}
        hasMarginBottom
      />

      <DatePicker
        title={routeName === '물건 등록' ? '대여 가능 기간' : '예상 대여 기간'}
        hasMarginBottom
      />

      {routeName === '물건 등록' && (
        <>
          <PostTextInput
            title={'최소 대여일'}
            value={form.min_dates}
            onChangeText={onFormTextHandler('min_dates')}
            isGray={false}
            hasMarginBottom
          />

          <PostTextInput
            title={'\u{20A9} 일당 가격'}
            value={form.price}
            onChangeText={onFormTextHandler('price')}
            isGray={true}
            hasMarginBottom
          />
        </>
      )}
      <PostTextInput
        title={'내용'}
        onChangeText={onFormTextHandler('description')}
        value={form.description}
        isGray={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default PostForm;
