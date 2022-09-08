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
import arrowLeft from '../../../assets/icons/chat_icons/icon-arrow-left.png';
import dot from '../../../assets/icons/chat_icons/icon-dot.png';
import line from '../../../assets/icons/chat_icons/icon-line.png';
import plus from '../../../assets/icons/chat_icons/icon-plus.png';
import send from '../../../assets/icons/chat_icons/icon-send.png';
import bim from '../../../assets/imgs/chat/image-sample.png';
import person from '../../../assets/imgs/chat/image-person.png';

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
          <Image
            source={person}
            style={styles.right}
            width={110}
            height={140}
          />
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
        <Image source={arrowLeft} width={30} height={30} />
        <Text style={styles.name}>짱소현</Text>
        <Image source={dot} width={30} height={30} />
      </View>

      <ScrollView style={styles.chatPart}>
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
        <PreChat />
        <SendMessage />
        <GetMessage />
      </ScrollView>

      <View style={styles.inputPart}>
        <Image source={plus} width={30} height={30} style={styles.plus} />
        <View style={styles.input}>
          <TextInput placeholder="메시지를 입력하세요" />
        </View>
        <View style={styles.sendPart}>
          <Image
            source={send}
            width={30}
            height={30}
            style={styles.sendButton}
          />
        </View>
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

  chatPart: {
    // backgroundColor: 'red',
    height: 442,
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

  sendPart: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },

  sendM: {
    backgroundColor: '#FC7574',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 2,
    width: 230,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  time: {
    // backgroundColor: 'blue',
    width: 55,
    paddingTop: 20,
    alignItems: 'center',
  },

  getPart: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },

  getM: {
    backgroundColor: '#EAECEF',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    height: 40,
  },

  inputPart: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },

  plus: {
    marginRight: 10,
    width: 33,
    height: 33,
  },

  input: {
    backgroundColor: '#F2F4F6',
    width: 320,
    height: 40,
    fontSize: 12,
    borderRadius: 30,
    paddingLeft: 10,
  },

  sendButton: {
    position: 'absolute',
    left: -35,
    top: -5,
  },

  product: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    paddingLeft: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  price: {
    flexDirection: 'row',
  },

  image: {
    margin: 15,
  },

  textH1: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  textH2: {
    paddingTop: 10,
  },

  left: {
    // backgroundColor: 'blue',
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },

  borrowButton: {
    // backgroundColor: 'white',
    color: '#FC7574',
    fontSize: 15,
    fontWeight: 'bold',
    width: 115,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
    borderRadius: 30,
    borderColor: '#FC7574',
    borderWidth: 1,
    marginTop: 25,
  },

  down: {
    backgroundColor: '#FFF3EF',
    flexDirection: 'row',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  right: {
    marginTop: 76,
  },

  preChat: {
    width: 300,
    borderColor: '#E5E8EB',
    borderWidth: 1,
    borderRadius: 15,
  },
});
