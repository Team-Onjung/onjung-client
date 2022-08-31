import React from 'react';
import {StyleSheet, View} from 'react-native';
import PostTextInput from '../../content/form/input/index';
import DatePicker from './date_picker';

const PostForm = ({form, setForm, routeName}) => {
  const onFormTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  return (
    <>
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
      <PostTextInput
        title={routeName === '물건 등록' ? '대여 가능 기간' : '예상 대여 기간'}
        minDate={form.min_dates}
        setStartDate={onFormTextHandler('start_date')}
        setEndDate={onFormTextHandler('end_date')}
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
    </>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default PostForm;
