import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from './date_picker';
import PostTextInput from './input';
import CustomPressable from './custom_pressable';
import SelectBox from './select_box';

import {width} from '../../../../utils/globalStyles';
import {ArrowRightIcon, BorderIcon} from '../../../svg';

const PostForm = ({form, setForm, routeName}) => {
  const onFormTextHandler = useCallback(
    name => value => {
      setForm({...form, [name]: value});
    },
    [form, setForm],
  );
  // const onFormTextHandler = name => value => {
  //   setForm({...form, [name]: value});
  // };

  return (
    <View style={styles.block}>
      <PostTextInput
        title={'글 제목'}
        value={form.title}
        onChangeText={onFormTextHandler('title')}
      />

      <BorderIcon style={styles.border} />

      <SelectBox
        title="카테고리 선택"
        justifyContent="space-between"
        value={form.category}
        onChangeText={onFormTextHandler('category')}>
        <ArrowRightIcon />
      </SelectBox>
      <BorderIcon style={styles.border} />

      <DatePicker
        title={routeName === '물건 등록' ? '대여 가능 기간' : '예상 대여 기간'}
        startDate={form.start_date}
        endDate={form.end_date}
        onChangeStartDate={onFormTextHandler('start_date')}
        onChangeEndDate={onFormTextHandler('end_date')}
      />
      <BorderIcon style={styles.border} />

      {routeName === '물건 등록' && (
        <>
          <SelectBox
            title="최소 대여일"
            justifyContent="flex-start"
            hasMarginRight>
            <CustomPressable onPress={() => console.log('customPressable')}>
              7일
            </CustomPressable>
          </SelectBox>
          <BorderIcon style={styles.border} />

          <PostTextInput
            title={'일당 가격'}
            value={form.price}
            onChangeText={onFormTextHandler('price')}
            secondText={'/일'}
            icon
          />
          <BorderIcon style={styles.border} />

          <PostTextInput
            title={'보증금 제시'}
            value={form.deposit}
            onChangeText={onFormTextHandler('deposit')}
            secondText={'보증금'}
            icon
          />
          <BorderIcon style={styles.border} />
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

  border: {
    marginHorizontal: width * 20,
  },
});

export default PostForm;
