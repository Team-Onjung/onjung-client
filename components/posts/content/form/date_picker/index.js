import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {width, colors, fonts} from '../../../../../utils/globalStyles';
import CustomPressable from '../custom_pressable';
import DateTimePicker from 'react-native-modal-datetime-picker';

const DatePicker = ({
  title,
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
}) => {
  const [startVisible, setStartVisible] = useState(false);
  const [endVisible, setEndVisible] = useState(false);
  // console.log(
  //   format(new Date(), 'yyyy-MM-dd', {locale: ko}) <
  //     format(new Date(selectedDate), 'yyyy-MM-dd', {locale: ko}),
  // );

  const onStartConfirm = selectedDate => {
    setStartVisible(false);

    onChangeStartDate(selectedDate);

    // endDate가 시작일로 선택한 날보다 앞에 있으면 시작일과 종료일 동기화
  };

  const onStartCancel = () => {
    setStartVisible(false);
  };

  const onEndConfirm = selectedDate => {
    setEndVisible(false);

    onChangeEndDate(selectedDate);
  };

  const onEndCancel = () => {
    setEndVisible(false);
  };

  return (
    <View style={styles.block}>
      <Text style={[styles.title, {...fonts.H5}, {marginBottom: width * 12}]}>
        {title}
      </Text>
      <View style={styles.box}>
        {/* 대여 시작 가능일 선택 */}
        <CustomPressable date onPress={() => setStartVisible(true)}>
          {format(new Date(startDate), 'yyyy-MM-dd', {locale: ko})}
        </CustomPressable>

        <Text style={{marginHorizontal: width * 8}}>~</Text>

        {/* 대여 종료일 선택 */}
        <CustomPressable date onPress={() => setEndVisible(true)}>
          {format(new Date(endDate), 'yyyy-MM-dd', {locale: ko})}
        </CustomPressable>
      </View>

      {/* visible 상태에 따른 시작일 및 종료일 모달창 띄우기 */}
      {startVisible && (
        <DateTimePicker
          onConfirm={onStartConfirm}
          onCancel={onStartCancel}
          minimumDate={new Date()}
          mode={'date'}
          date={startDate}
          isVisible={startVisible}
        />
      )}
      {endVisible && (
        <DateTimePicker
          onConfirm={onEndConfirm}
          onCancel={onEndCancel}
          minimumDate={new Date()}
          mode={'date'}
          date={endDate}
          isVisible={endVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginHorizontal: width * 24,
    paddingVertical: width * 24,
  },

  box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title: {
    color: colors['$gray-2'],
    fontSize: width * 15,
    letterSpacing: width * -0.15,
  },
});

export default DatePicker;
