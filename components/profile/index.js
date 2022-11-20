import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Button,
} from 'react-native';
import {
  AlarmIcon,
  SearchIcon,
  SettingIcon,
  OnjungIcon,
  LikeIcon,
  ReviewIcon,
  BorrowIcon,
  DropdownIcon,
  PinkCheckIcon,
  DotsIcon,
  ArrowLeftIcon,
} from '../svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, height} from '../../utils/globalStyles';
import data from './data.json';
import {useNavigation} from '@react-navigation/native';
import {request} from 'react-native-permissions';
import {cameraPermissions} from '../config/platform';
import RBSheet from 'react-native-raw-bottom-sheet';

const Profile = () => {
  const requestPermission = () => {
    request(cameraPermissions).then(navigation.navigate('CameraPage'));
  };
  const navigation = useNavigation();
  let tip = data.tip;
  const [value, setValue] = useState('상품');
  const refRBSheet1 = useRef();
  const [follow, setFollow] = useState('팔로우');

  return (
    <SafeAreaView>
      <ScrollView style={styles.pageContainer}>
        <View style={styles.settings}>
          <ArrowLeftIcon style={styles.alarm} />
          <DotsIcon style={styles.setting} />
        </View>
        <View style={styles.profile}>
          <Image
            style={styles.profilePic}
            source={require('../../assets/imgs/main/Rectangle.png')}
          />
          <Text style={styles.userName}>얼리어답터 지우</Text>
        </View>
        <View style={styles.profileMenu}>
          <View style={styles.rateBox}>
            <Text style={styles.rateText}>정 5.0</Text>
            <OnjungIcon style={styles.rateIcon} />
            <OnjungIcon style={styles.rateIcon} />
            <OnjungIcon style={styles.rateIcon} />
            <OnjungIcon style={styles.rateIcon} />
            <OnjungIcon style={styles.rateIcon} />
          </View>
          <View
            style={styles.followButton}
            onPress={() => setFollow('팔로우 중')}>
            <Text style={styles.followText}>{follow}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Pressable
            onPress={() => {
              setValue('상품');
            }}
            style={styles.textbutton01}>
            <Text style={{color: value === '상품' ? '#F05655' : '#8B95A1'}}>
              상품
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setValue('거래후기');
            }}
            style={styles.textbutton02}>
            <Text style={{color: value === '거래후기' ? '#F05655' : '#8B95A1'}}>
              거래후기
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
  },
  profile: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItem: 'center',
    marginTop: 10,
  },
  profileMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
    marginRight: 10,
  },

  profilePic: {
    height: 72,
    width: 72,
    borderRadius: 100,
    marginLeft: 14,
  },
  userName: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 14,
    fontWeight: 'bold',
    color: '#333D4B',
    marginTop: width * 10,
    marginBottom: width * 15,
  },
  rateBox: {
    flexDirection: 'row',
    height: 40,
    width: 246,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: '#F05655',
    marginBottom: 25,
  },
  rateText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 12,
    color: '#F05655',
    marginTop: width * 9,
    marginBottom: width * 10,
    marginLeft: width * 20,
    marginRight: width * 6,
  },
  rateIcon: {
    height: 24,
    width: 24,
    marginTop: width * 6.3,
    marginBottom: width * 10,
    marginLeft: width * 6,
  },
  followButton: {
    height: 33,
    width: 58,
    backgroundColor: '#FFE9E9',
    marginBottom: 30,
    marginLeft: 15,
    marginTop: 3,
    borderRadius: 6.36,
  },
  followText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 11,
    fontWeight: 'light',
    color: '#F05655',
    marginTop: width * 7,
    marginBottom: width * 5,
    marginLeft: width * 11,
    marginRight: width * 5,
  },
  settings: {
    flexDirection: 'row',
    marginLeft: width * 18,
  },

  menu: {
    marginLeft: width * 2,
    width: width * 15,
    height: height * 15,
  },
  setting: {
    marginTop: width * 11,
    marginLeft: width * 300,
    width: width * 18,
    height: height * 18,
  },
  alarm: {
    marginTop: width * 9,
    width: width * 20,
    height: height * 20,
  },
  dropdown: {
    width: width * 20,
    height: height * 20,
  },
  textbutton01: {
    flex: 1,
    marginTop: width * 25,
    marginLeft: width * 25,
    marginBottom: width * 15,
    width: width * 12,
    height: height * 20,
  },
  textbutton02: {
    marginTop: width * 25,
    marginBottom: width * 15,
    marginLeft: width * 5,
    marginHorizontal: width * 265,
  },
  contentContainer: {
    height: height * 600,
    backgroundColor: '#F9FAFB',
  },
  pageContainer: {
    height: height * 600,
    backgroundColor: '#FFF',
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
  searchSelection1: {
    marginLeft: width * 15,
    width: width * 10,
    height: width * 40,
    paddingTop: width * 15,
    paddingHorizontal: width * 10,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  searchSelectionOptions: {
    marginLeft: width * 15,
    marginTop: width * 6,
    width: width * 300,
    height: width * 30,
    paddingHorizontal: width * 10,
    fontSize: width * 8,
  },
  searchSelectionTitle: {
    marginLeft: width * 3,
    marginVertical: width * 6,
    width: width * 300,
    height: width * 30,
    paddingHorizontal: width * 10,
    fontSize: width * 15,
    fontWeight: 'bold',
    color: '#333D4B',
  },
  myPageCategory: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 15,
    fontWeight: 'bold',
    color: '#333D4B',
    marginBottom: width * 2,
    width: width * 100,
  },
});

export default Profile;
