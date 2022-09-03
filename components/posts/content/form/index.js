import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from './date_picker';
import PostTextInput from './input';
import CustomPressable from './custom_pressable';
import SelectBox from './select_box';

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
      />

      <SelectBox
        title="카테고리 선택"
        justifyContent="space-between"
        value={form.category}
        onChangeText={onFormTextHandler('category')}>
        <Text>+</Text>
      </SelectBox>

      <DatePicker
        title={routeName === '물건 등록' ? '대여 가능 기간' : '예상 대여 기간'}
      />

      {routeName === '물건 등록' && (
        <>
          <SelectBox
            title="최소 대여일"
            justifyContent="flex-start"
            hasMarginRight>
            <CustomPressable onPress={() => console.log('customPressable')}>
              hi
            </CustomPressable>
          </SelectBox>

          <PostTextInput
            title={'\u{20A9} 일당 가격'}
            value={form.price}
            onChangeText={onFormTextHandler('price')}
          />

          <PostTextInput
            title={'\u{20A9} 보증금 제시'}
            value={form.deposit}
            onChangeText={onFormTextHandler('deposit')}
          />
        </>
      )}

      <PostTextInput
        title={'내용'}
        onChangeText={onFormTextHandler('description')}
        value={form.description}
        multiline
        content
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default PostForm;
