import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import ArrowLeft from '../../../assets/icons/chat_icons/icon-arrow-left.svg';
import Dot from '../../../assets/icons/chat_icons/icon-dot.svg';
import Line from '../../../assets/icons/chat_icons/icon-line.svg';
import Plus from '../../../assets/icons/chat_icons/icon-plus.svg';
import Send from '../../../assets/icons/chat_icons/icon-send.svg';
import bim from '../../../assets/imgs/chat/image-sample.png';
import Person from '../../../assets/imgs/chat/image-person.svg';
import {width, height, colors} from '../../../utils/globalStyles';

const PreChat = () => {
  const sample = {
    name: 'PF50ka lg 빔프로젝터',
    price: 5000,
    img: bim,
    time: '오후 9:40',
  };
  return (
    <View style={styles.sendPart}>
      <View style={styles.time}>
        <Text style={{fontSize: 11, paddingTop: 265}}>{sample.time}</Text>
      </View>
      <View style={styles.preChat}>
        <View style={styles.product}>
          <View style={styles.image}>
            <Image source={sample.img} />
          </View>
          <View>
            <Text>{sample.name}</Text>
            <View style={styles.price}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {sample.price}원
              </Text>
              <Text> /일</Text>
            </View>
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
            <Text style={styles.textH1}>
              안녕하세요,
              {'\n'}
              대여 원합니다!
            </Text>
            <Text style={styles.textH2}>
              채팅으로 대여 가능 여부를
              {'\n'}
              확인 후 버튼을 눌러주세요!
            </Text>
            <Text style={styles.borrowButton}>대여하기</Text>
          </View>
          <Person style={styles.right} width={110} height={140} />
        </View>
      </View>
    </View>
  );
};

const SendMessage = () => {
  const sample = [
    {id: 1, time: '오후 9:40', content: '대여하고 싶어요! 대여대여대여'},
    {id: 2, time: '오후 9:40', content: '대여하고 싶어요! 대여대여대여'},
    {id: 3, time: '오후 9:40', content: '대여하고 싶어요! 대여대여대여'},
    {id: 4, time: '오후 9:40', content: '대여하고 싶어요! 대여대여대여'},
    {id: 5, time: '오후 9:40', content: '대여하고 싶어요! 대여대여대여'},
    {id: 6, time: '오후 9:40', content: '대여하고 싶어요! 대여대여대여'},
    {id: 7, time: '오후 9:40', content: '대여하고 싶어요! 대여대여대여'},
  ];

  return (
    <View>
      {sample.map(m => (
        <View style={styles.sendPart} key={m.id}>
          <View style={styles.time}>
            <Text style={{fontSize: 11}}>{m.time}</Text>
          </View>
          <View style={styles.sendM}>
            <Text style={{color: '#FFFFFF'}}>{m.content}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const GetMessage = () => {
  const sample = [{id: 1, time: '오후 9:41', content: '좋습니다.'}];

  return (
    <View>
      {sample.map(m => (
        <View style={styles.getPart} key={m.id}>
          <View style={styles.getM}>
            <Text>{m.content}</Text>
          </View>
          <View style={styles.time}>
            <Text style={{fontSize: 11}}>{m.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const Talk = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month =
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
  let date = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  let dayOfWeek = week[now.getDay()];

  return (
    <SafeAreaView style={{backgroundColor: '#F9FAFB'}}>
      <View style={styles.bar}>
        <ArrowLeft style={styles.arrowLeft} />
        <Text style={styles.name}>짱소현</Text>
        <Dot width={20} height={20} />
      </View>

      <ScrollView style={styles.chatPart}>
        <View style={styles.dateBox}>
          <Line style={styles.line} />
          <View style={styles.date}>
            <Text>
              {year}.{month}.{date} {dayOfWeek}요일
            </Text>
          </View>
          <Line style={styles.line} />
        </View>
        <PreChat />
        <SendMessage />
        <GetMessage />
      </ScrollView>

      <View style={styles.inputPart}>
        <Plus width={36} height={36} style={styles.plus} />
        <View style={styles.input}>
          <TextInput
            style={{fontSize: width * 12}}
            placeholder="메시지를 입력하세요"
          />
        </View>
        <View style={styles.sendPart}>
          <Send width={30} height={30} style={styles.sendButton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Talk;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: width * 20,
  },
  name: {
    fontSize: width * 17,
    fontWeight: 'bold',
  },

  arrowLeft: {
    width: width * 1,
    height: height * 1,
  },

  chatPart: {
    height: height * 492,
  },

  dateBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  line: {
    paddingTop: height * 44,
  },

  date: {
    paddingVertical: height * 10,
    width: width * 130,
    alignItems: 'center',
  },

  sendPart: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: width * 10,
  },

  sendM: {
    backgroundColor: colors['$coral-4'],
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 2,
    width: width * 210,
    height: height * 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  time: {
    width: width * 55,
    paddingTop: height * 20,
    alignItems: 'center',
  },

  getPart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: width * 10,
  },

  getM: {
    backgroundColor: colors['$gray-11'],
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 210,
    height: height * 40,
  },

  inputPart: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 80,
  },

  plus: {
    marginRight: width * 5,
    width: width * 33,
    height: height * 33,
    marginTop: height * 2,
  },

  input: {
    backgroundColor: colors['$gray-9'],
    width: width * 300,
    height: height * 40,
    borderRadius: 30,
    paddingLeft: width * 10,
  },

  sendButton: {
    position: 'absolute',
    left: width * -30,
    top: height * -5,
  },

  product: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 90,
    paddingLeft: width * 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  price: {
    flexDirection: 'row',
  },

  image: {
    margin: width * 15,
  },

  textH1: {
    fontSize: width * 18,
    fontWeight: 'bold',
  },

  textH2: {
    paddingTop: height * 10,
  },

  left: {
    paddingLeft: width * 18,
    paddingVertical: height * 25,
  },

  borrowButton: {
    color: colors['$coral-4'],
    fontSize: width * 15,
    fontWeight: 'bold',
    width: width * 115,
    height: height * 40,
    textAlign: 'center',
    lineHeight: height * 40,
    borderRadius: 30,
    borderColor: colors['$coral-4'],
    borderWidth: width * 1,
    marginTop: height * 25,
  },

  down: {
    backgroundColor: colors['$coral-1'],
    flexDirection: 'row',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  right: {
    marginTop: height * 82,
  },

  preChat: {
    width: width * 270,
    borderColor: colors['$gray-8'],
    borderWidth: width * 1,
    borderRadius: 15,
  },
});
