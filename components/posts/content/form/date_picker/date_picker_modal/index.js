import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const DatePickerModal = ({isVisible, date, onConfirm, onCancel}) => {
  return (
    <View>
      <DateTimePicker
        onConfirm={onConfirm}
        onCancel={onCancel}
        mode={'date'}
        date={date}
        isVisible={isVisible}
      />
    </View>
  );
};

export default DatePickerModal;
