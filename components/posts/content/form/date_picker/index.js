import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../../../../utils/color';

const DatePicker = ({title, hasMarginBottom}) => {
  return (
    <View style={[styles.block, hasMarginBottom && styles.margin]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.box}>
        <Pressable style={styles.date}>
          <Text style={styles.date_text}>
            {format(new Date(), 'yyyy-MM-dd', {locale: ko})}
          </Text>
        </Pressable>
        <Text style={[styles.text, styles.marginRight]}>부터</Text>

        <Pressable style={styles.date}>
          <Text style={styles.date_text}>
            {format(new Date(), 'yyyy-MM-dd', {locale: ko})}
          </Text>
        </Pressable>
        <Text style={styles.text}>까지</Text>
      </View>
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
    color: COLOR['$gray-2'],
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: -0.15,
  },

  date: {
    height: 32,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLOR['$gray-7'],
    flex: 1,
    marginRight: 10,
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
