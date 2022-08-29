import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLOR} from './../../../utils/color';

const RentDatePicker = ({date, setDate}) => {
  const dates = [3, 5, 10, 15, 30];

  return (
    <View style={styles.block}>
      {dates.map(curDate => (
        <Pressable
          key={curDate}
          onPress={() => setDate(curDate)}
          style={[styles.box, date === curDate && styles.selected]}>
          <Text style={[styles.text, date === curDate && {color: COLOR.WHITE}]}>
            {curDate}일
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    marginVertical: 24,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#c9c9c9',
    borderRadius: 20,
  },

  box: {
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 20,
  },

  selected: {
    backgroundColor: COLOR.MAIN,
  },
});

export default RentDatePicker;
