import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Profile from '../../../assets/icons/chat_icons/icon-profile.svg';
import {width, height, colors} from '../../../utils/globalStyles';

const ChatItem = ({nickname, img, content, time}) => {
  // var now = new Date();
  // var end = new Date('2022-09-01 09:07:00');
  // var diffYear = now.getFullYear() - end.getFullYear(); // 년 차
  // var diffMon = now.getMonth() - end.getMonth(); // 월 차
  // var diffDay = now.getDay() - end.getDay(); // 일 차
  // var diffHour = now.getTime() - end.getTime(); // 시 차

  // if (diffYear > 0) {
  //   var time_ago = diffYear + '년 전';
  // } else if (diffMon > 0) {
  //   var time_ago = diffMon + '월 전';
  // } else if (diffDay > 0) {
  //   var time_ago = diffDay + '일 전';
  // } else if (diffHour > 0) {
  //   var time_ago = diffHour + '시 전';
  // } else if (diffMin > 0) {
  //   var time_ago = diffMin + '분 전';
  // } else {
  //   var time_ago = diffTime + '초 전';
  // }

  return (
    <View style={styles.chat}>
      <Profile style={styles.img} />
      <View>
        <Text style={styles.nickname}>{nickname}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const Chats = () => {
  chat_data = [
    {
      id: 1,
      nickname: '짱소현',
      img: '',
      content: '제일 최근 내용',
      time: '10분 전', // 마지막 채팅 시간
    },
    {
      id: 2,
      nickname: '얼리어답터 지우',
      img: '',
      content: '제일 최근 내용',
      time: '1시간 전',
    },
  ];
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <View style={styles.bar}>
        <Text style={styles.title}>채팅</Text>
      </View>
      {chat_data.map(ch => (
        <View key={ch.id}>
          <ChatItem
            nickname={ch.nickname}
            img={ch.img}
            content={ch.content}
            time={ch.time}
          />
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  bar: {
    padding: width * 20,
  },
  title: {
    fontSize: width * 16,
    fontWeight: 'bold',
  },

  chat: {
    backgroundColor: colors['$coral-4'],
    opacity: 0.9,
    marginTop: height * 2,
    flexDirection: 'row',
    height: height * 105,
    width: width * 365,
    padding: width * 10,
    borderRadius: 10,
  },

  img: {
    width: width * 1,
    height: height * 1,
  },

  nickname: {
    fontWeight: 'bold',
    marginLeft: width * 15,
    marginTop: height * 5,
    fontSize: width * 13,
  },

  content: {
    marginLeft: width * 15,
    marginTop: height * 10,
  },

  time: {
    marginLeft: width * 10,
    marginTop: height * 6,
    color: colors['$gray-11'],
    fontSize: width * 10,
  },
});
