import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import arrowLeft from '../../../assets/icons/chat_icons/icon-arrow-left.png';
import dot from '../../../assets/icons/chat_icons/icon-dot.png';
import line from '../../../assets/icons/chat_icons/icon-line.png';

const SendMessage = () => {
  const sample = [
    {id: 1, time: '15:40', content: '대여하고 싶어요! 대여대여대여'},
  ];

  return (
    <View style={styles.sendM}>
      {sample.map(m => (
        <Text>{m.content}</Text>
      ))}
    </View>
  );
};

const GetMessage = () => {
  const sample = [{id: 1, time: '15:41', content: '좋습니다.'}];
};

const Talk = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month =
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
  let date = now.getDate() + 1 > 9 ? now.getDate() : '0' + now.getDate();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  let dayOfWeek = week[now.getDay()];

  return (
    <SafeAreaView>
      <View style={styles.bar}>
        <Image source={arrowLeft} width={30} height={30} />
        <Text style={styles.name}>짱소현</Text>
        <Image source={dot} width={30} height={30} />
      </View>
      <View style={styles.dateBox}>
        <View style={styles.line}>
          <Image source={line} width={1} />
        </View>
        <View style={styles.date}>
          <Text>
            {year}.{month}.{date} {dayOfWeek}요일
          </Text>
        </View>
        <View style={styles.line}>
          <Image source={line} width={1} />
        </View>
      </View>
      <View>
        <SendMessage />
      </View>
    </SafeAreaView>
  );
};

export default Talk;

const styles = StyleSheet.create({
  bar: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  dateBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  line: {
    // backgroundColor: 'red',
    paddingTop: 19,
    paddingBottom: 1,
  },

  date: {
    // backgroundColor: 'pink',
    paddingTop: 10,
    paddingBottom: 10,
    width: 130,
    alignItems: 'center',
  },

  sendM: {
    backgroundColor: '#FC7574',
    color: 'white',
    width: 200,
    height: 40,
  },
});
