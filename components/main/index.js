import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import alarm from '../../assets/imgs/mainImg/alarm.png';
import menu from '../../assets/imgs/mainImg/menu.png';
import search from '../../assets/imgs/mainImg/search.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, colors} from '../../utils/globalStyles';
import data from './data.json';

const Main = () => {
  let tip = data.tip;
  const [value, setValue] = useState('대여 가능');
  return (
    <SafeAreaView>
      <View style={styles.settings}>
        <Image style={styles.menu} source={menu} />
        <Image style={styles.search} source={search} />
        <Image style={styles.alarm} source={alarm} />
      </View>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setValue('대여 가능');
          }}
          style={styles.textbutton01}>
          <Text
            style={
              (styles.text,
              {fontSize: 50},
              {color: value === '대여 가능' ? '#F05655' : '#8B95A1'})
            }>
            대여 가능
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setValue('대여 요청');
          }}
          style={styles.textbutton02}>
          <Text
            style={
              (styles.text,
              {fontSize: 50},
              {color: value === '대여 요청' ? '#F05655' : '#8B95A1'})
            }>
            대여 요청
          </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.contentContainer}>
        {tip.map((content, i) => (
          <View style={styles.postlist} key={i}>
            <Image
              style={styles.postImage}
              source={require('../../assets/imgs/mainImg/beamproject.png')}
            />
            <View style={styles.postText}>
              <Text style={styles.postTitle} numberOfLines={1}>
                {content.title}
              </Text>
              <Text style={styles.postUser}>{content.user_name}</Text>
              <Text style={styles.postPrice}> {content.price}원 / 일</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  settings: {
    flexDirection: 'row',
    marginTop: 20,
  },

  menu: {
    marginLeft: 25,
    width: 16,
    height: 16,
  },
  search: {
    marginLeft: 300,
    width: 18,
    height: 18,
  },
  alarm: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  textbutton01: {
    flex: 1,
    marginTop: 20,
    marginLeft: 25,
    height: 30,
    width: 10,
  },
  textbutton02: {
    flex: 1,
    marginTop: 20,
    marginLeft: 5,
    marginHorizontal: width * 230,
  },
  text: {
    fontSize: 20,
    color: colors['$gray-5'],
  },
  contentContainer: {
    height: 500,
  },

  postlist: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  postImage: {
    flex: 1,
    width: 10,
    height: 90,
    borderRadius: 20,
    margin: 10,
    resizeMode: 'cover',
  },
  postText: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 7,
    justifyContent: 'flex-start',
  },
  postTitle: {
    fontSize: 20,
    color: '#222222',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  postUser: {
    fontSize: 15,
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  postPrice: {
    fontSize: 18,
    color: '#4E5968',
    justifyContent: 'flex-start',
  },
});

export default Main;
