import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {width, height, colors} from '../../../../../utils/globalStyles';
import DatePickerModal from './date_picker_modal';

const DatePicker = ({title, hasMarginBottom}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startVisible, setStartVisible] = useState(false);
  const onStartConfirm = selectedDate => {
    setStartVisible(false);
    setStartDate(selectedDate);

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
    <View style={[styles.block, hasMarginBottom && styles.margin]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.box}>
        <Pressable style={styles.date} onPress={() => setStartVisible(true)}>
          <Text style={styles.date_text}>
            {format(new Date(startDate), 'yyyy-MM-dd', {locale: ko})}
          </Text>
        </Pressable>
        <Text style={[styles.text, styles.marginRight]}>부터</Text>

        <Pressable style={styles.date} onPress={() => setEndVisible(true)}>
          <Text style={styles.date_text}>
            {format(new Date(endDate), 'yyyy-MM-dd', {locale: ko})}
          </Text>
        </Pressable>
        <Text style={styles.text}>까지</Text>
      </View>
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
  block: {flex: 1, marginHorizontal: 20},

  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    marginLeft: width * 4,
    color: colors['$gray-2'],
    fontWeight: 'bold',
    fontSize: width * 15,
    letterSpacing: width * -0.15,
  },

  date: {
    paddingHorizontal: width * 15,
    paddingVertical: width * 10,
    backgroundColor: colors['$gray-6'],
    borderRadius: 5,
    flex: 1,
    marginRight: width * 10,
    justifyContent: 'center',
  },

  date_text: {
    color: colors['$gray-4'],
    fontSize: width * 15,
    letterSpacing: width * -0.15,
    fontWeight: '600',
  },

  text: {
    color: colors['$gray-2'],
    fontSize: width * 15,
    letterSpacing: width * -0.15,
    fontWeight: 'bold',
  },

  marginRight: {
    marginRight: width * 10,
  },

  margin: {
    marginBottom: width * 8,
  },
});

export default DatePicker;
