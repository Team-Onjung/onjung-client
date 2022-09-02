import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const DatePickerModal = ({
  minimumDate,
  isVisible,
  date,
  onConfirm,
  onCancel,
}) => {
  return (
    <View>
      <DateTimePicker
        onConfirm={onConfirm}
        onCancel={onCancel}
        minimumDate={minimumDate}
        mode={'date'}
        date={date}
        isVisible={isVisible}
      />
    </View>
  );
};

export default DatePickerModal;
