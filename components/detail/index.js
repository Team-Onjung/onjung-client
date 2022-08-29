import React from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLOR} from '../../utils/color';
// import HashTag from './hashtag';

const Detail = () => {
  const Data = {
    user_name: '얼리어답터 지우',
    user_profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    location: '서초구 반포본동',
    title: 'PF50ka lg 빔프로젝터',
    category: '디지털 / 가전',
    description:
      '깨끗하게 사용해서 거의 새 것 수준입니다. \n집에서친구랑 영화볼 때 유용하게 사용해요 \n특별한 날을 위해 득템해가세요!!',
    hashtags: '프로젝터, 영화, 빔프로젝터',
    price_for_day: 5000,
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    rates: 5.0,
  };

  const {width} = Dimensions.get('window');

  const Price = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.bold, {fontSize: 18, color: '#444'}]}>
          {Data.price_for_day.toLocaleString('ko-KR')}원
        </Text>
        <Text>&#32;/일</Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <ScrollView style={styles.block}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
          }}
          style={{aspectRatio: 1.5}}
        />
        <View style={styles.user_box}>
          <View style={styles.user_content}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
              }}
              style={styles.user_profile}
            />
            <View>
              <Text style={[styles.bold, {fontSize: 16}]}>
                {Data.user_name}
              </Text>
              <Text style={[styles.bold, {fontSize: 12, color: '#9e9e9e'}]}>
                {Data.location}
              </Text>
            </View>
          </View>
          <View style={styles.rate_box}>
            <Text style={[styles.bold, {color: COLOR.MAIN}]}>
              ★ {Data.rates.toFixed(1)}
            </Text>
          </View>
        </View>
        <View style={[styles.seperator, {marginBottom: 16}]} />
        <View style={{marginHorizontal: 16, flex: 1}}>
          <Text style={[styles.title, styles.bold]}>{Data.title}</Text>
          <Text style={[styles.category, styles.bold]}>{Data.category}</Text>
          <Price />
          <Text style={styles.description}>{Data.description}</Text>
          {/* <FlatList
          data={Data.hashtags}
          renderItem={({item}) => <HashTag item={item} />}
        /> */}
        </View>
        <View style={styles.seperator} />
        <View style={[styles.price, {marginVertical: 24}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <Text style={[styles.bold, {fontSize: 14, alignItems: 'center'}]}>
              일일 대여가
            </Text>
            <Price />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.bold, {fontSize: 14, alignItems: 'center'}]}>
              일일 대여가
            </Text>
            <Text style={[styles.bold, {fontSize: 18, color: '#444'}]}>
              {(Data.price_for_day * 10).toLocaleString('ko-KR')}원
            </Text>
          </View>
          <Text style={[styles.bold, {fontSize: 11, color: '#9e9e9e'}]}>
            최소 3일 이상 대여해야 해요.
          </Text>
        </View>
        <Pressable
          style={{
            marginHorizontal: 16,
            marginBottom: 16,
            height: 48,
            borderRadius: 8,
            backgroundColor: COLOR.MAIN,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.bold, {color: COLOR.WHITE, fontSize: 16}]}>
            채팅하기
          </Text>
        </Pressable>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },

  img: {resizeMode: 'cover'},

  user_box: {
    marginHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  user_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  user_profile: {
    width: 48,
    aspectRatio: 1,
    borderRadius: 24,
    marginRight: 12,
  },

  rate_box: {
    width: 56,
    height: 32,
    borderRadius: 5,
    backgroundColor: COLOR.BACK,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bold: {fontWeight: 'bold'},

  description: {fontSize: 14, color: '#777', marginVertical: 16},

  title: {
    fontSize: 22,
    color: '#444',
  },

  category: {fontSize: 12, color: '#9e9e9e', marginVertical: 6},

  price: {marginHorizontal: 16},

  seperator: {
    height: 1,
    backgroundColor: '#9e9e9e',
    marginHorizontal: 16,
  },
});

export default Detail;
