import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {width, colors, fonts} from '../../../../../utils/globalStyles';
import DatePickerModal from './date_picker_modal';
import CustomPressable from '../custom_pressable';

const DatePicker = ({title, hasMarginBottom}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startVisible, setStartVisible] = useState(false);
  const onStartConfirm = selectedDate => {
    setStartVisible(false);
    setStartDate(selectedDate);

    // endDate가 시작일로 선택한 날보다 앞에 있으면 시작일과 종료일 동기화
    if (endDate < selectedDate) {
      setEndDate(selectedDate);
    }
  };
  const onStartCancel = () => {
    setStartVisible(false);
  };

  const [endDate, setEndDate] = useState(new Date());
  const [endVisible, setEndVisible] = useState(false);
  const onEndConfirm = selectedDate => {
    setEndVisible(false);
    setEndDate(selectedDate);
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
        <CustomPressable onPress={() => setStartVisible(true)}>
          {format(new Date(startDate), 'yyyy-MM-dd', {locale: ko})}
        </CustomPressable>

        <Text style={{marginHorizontal: width * 8}}>~</Text>

        {/* 대여 종료일 선택 */}
        <CustomPressable onPress={() => setEndVisible(true)}>
          {format(new Date(startDate), 'yyyy-MM-dd', {locale: ko})}
        </CustomPressable>
      </View>

      {/* visible 상태에 따른 시작일 및 종료일 모달창 띄우기 */}
      {startVisible ? (
        <DatePickerModal
          isVisible={startVisible}
          minimumDate={new Date()}
          date={startDate}
          onConfirm={onStartConfirm}
          onCancel={onStartCancel}
        />
      ) : (
        <DatePickerModal
          isVisible={endVisible}
          minimumDate={startDate}
          date={endDate}
          onConfirm={onEndConfirm}
          onCancel={onEndCancel}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginHorizontal: width * 24,
    paddingVertical: width * 24,
    borderBottomColor: colors['$gray-6'],
    borderBottomWidth: 0.5,
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
