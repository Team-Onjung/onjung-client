import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../../../../utils/color';
import DatePickerModal from './date_picker_modal';
import DateTimePicker from 'react-native-modal-datetime-picker';

const DatePicker = ({title, hasMarginBottom}) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  // const [isVisible, setIsVisible] = useState(false);

  const [isVisible, setIsVisible] = useState({
    start: false,
    end: false,
  });

  const [dateModal, setDateModal] = useState({
    start: new Date(),
    end: new Date(),
  });

  const onPressDate = name => {
    setIsVisible({...isVisible, name: [true]});
  };

  const onConfirm = ({name, selectedDate}) => {
    setIsVisible({...isVisible, name: [false]});
    setDateModal({...dateModal, [name]: selectedDate});
  };

  const onCancel = name => {
    setIsVisible({...isVisible, [name]: false});
  };

  return (
    <View style={[styles.block, hasMarginBottom && styles.margin]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.box}>
        <Pressable
          style={styles.date}
          onPress={() => setIsVisible({...isVisible, ['start']: true})}>
          <Text style={styles.date_text}>
            {format(new Date(dateModal.start), 'yyyy-MM-dd', {locale: ko})}
          </Text>
        </Pressable>
        <Text style={[styles.text, styles.marginRight]}>부터</Text>

        <Pressable style={styles.date}>
          <Text style={styles.date_text}>
            {format(new Date(dateModal.end), 'yyyy-MM-dd', {locale: ko})}
          </Text>
        </Pressable>
        <Text style={styles.text}>까지</Text>
      </View>
      <DatePickerModal
        isVisible={isVisible.start}
        date={dateModal.start}
        onConfirm={() => onConfirm('start')}
        onCancel={() => onCancel('start')}
      />
      <DatePickerModal
        isVisible={isVisible.end}
        date={dateModal.end}
        onConfirm={() => onConfirm('end')}
        onCancel={() => onCancel('end')}
      />
      {/* <DateTimePicker
        isVisible={isVisible}
        mode={'date'}
        date={new Date()}
        onConfirm={() => onConfirm}
        onCancel={onCancel}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1, marginHorizontal: 20},

  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    marginLeft: 4,
    color: COLOR['$gray-2'],
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: -0.15,
  },

  date: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLOR['$gray-6'],
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
  },

  date_text: {
    color: COLOR['$gray-4'],
    fontSize: 15,
    letterSpacing: -0.15,
    fontWeight: '600',
  },

  text: {
    color: COLOR['$gray-2'],
    fontSize: 15,
    letterSpacing: -0.15,
    fontWeight: 'bold',
  },

  marginRight: {
    marginRight: 10,
  },

  margin: {
    marginBottom: 8,
  },
});

export default DatePicker;
