import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Button,
} from 'react-native';
import {AlarmIcon, SearchIcon} from '../svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, height} from '../../utils/globalStyles';
import data from './data.json';
import {useNavigation} from '@react-navigation/native';
import {request} from 'react-native-permissions';
import {cameraPermissions} from '../config/platform';

const MyPage = () => {
  const requestPermission = () => {
    request(cameraPermissions).then(navigation.navigate('CameraPage'));
  };
  const navigation = useNavigation();
  let tip = data.tip;
  const [value, setValue] = useState('나의 상품');
  return (
    <SafeAreaView>
      <View style={styles.settings}>
        <SearchIcon
          onPress={() => {
            navigation.navigate('Search');
          }}
          style={styles.search}
        />
        <AlarmIcon style={styles.alarm} />
      </View>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setValue('나의 상품');
          }}
          style={styles.textbutton01}>
          <Text style={{color: value === '나의 상품' ? '#F05655' : '#8B95A1'}}>
            나의 상품
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setValue('대여한 상품');
          }}
          style={styles.textbutton02}>
          <Text
            style={{color: value === '대여한 상품' ? '#F05655' : '#8B95A1'}}>
            대여한 상품
          </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.contentContainer}>
        {tip.map((content, i) => (
          <View style={styles.postlist} key={i}>
            <Pressable
              onPress={() => {
                navigation.navigate('Detail', {idx: i});
              }}
              style={styles.total}>
              <Image
                style={styles.postImage}
                source={require('../../assets/imgs/main/Rectangle.png')}
              />
              <View style={styles.postText}>
                <Text style={styles.postTitle} numberOfLines={1}>
                  {content.title}
                </Text>
                <Text style={styles.postUser}>
                  {content.user_name} • {content.time}분 전
                </Text>
                <Text style={styles.postPrice}> {content.price}원 /일</Text>
              </View>
            </Pressable>
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
    marginTop: width * 10,
  },

  menu: {
    marginLeft: width * 2,
    width: width * 15,
    height: height * 15,
  },
  search: {
    marginTop: width * 10,
    marginLeft: width * 40,
    width: width * 18,
    height: height * 18,
  },
  alarm: {
    marginTop: width * 11,
    marginLeft: width * 10,
    width: width * 20,
    height: height * 20,
  },
  textbutton01: {
    flex: 1,
    marginTop: width * 25,
    marginLeft: width * 25,
    width: width * 10,
    height: height * 30,
    marginBottom: width * 10,
  },
  textbutton02: {
    flex: 1,
    marginTop: width * 25,
    marginLeft: width * 5,
    marginHorizontal: width * 230,
    marginBottom: width * 10,
  },
  contentContainer: {
    height: height * 500,
  },

  postlist: {
    flex: 1,
    flexDirection: 'row',
  },
  total: {
    flexDirection: 'row',
  },
  postImage: {
    flexDirection: 'row',
    width: width * 85,
    height: height * 105,
    borderRadius: 10,
    margin: width * 10,
    marginLeft: width * 25,
  },
  postText: {
    flexDirection: 'column',
    marginTop: width * 7,
    marginLeft: width * 5,
  },
  postTitle: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 15,
    color: '#333D4B',
    marginBottom: width * 2,
  },
  postUser: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 12,
    color: '#8B95A1',
    marginBottom: width * 25,
  },
  postPrice: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 17,
    color: '#4E5968',
    marginLeft: width * -3,
  },
});

export default MyPage;
