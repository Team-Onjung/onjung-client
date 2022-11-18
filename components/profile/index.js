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
  const [value, setValue] = useState('나의 상품');
  const [categoryValue, setCategoryValue] = useState('모든 상품 보기');
  const refRBSheet1 = useRef();

  return (
    <SafeAreaView>
      <ScrollView style={styles.pageContainer}>
        <View style={styles.settings}>
          <SettingIcon style={styles.setting} />
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
            <Text style={styles.rateText}>나의 정 5.0</Text>
            <OnjungIcon style={styles.rateIcon} />
            <OnjungIcon style={styles.rateIcon} />
            <OnjungIcon style={styles.rateIcon} />
            <OnjungIcon style={styles.rateIcon} />
            <OnjungIcon style={styles.rateIcon} />
          </View>
        </View>
        <View style={styles.profileMenu}>
          <ReviewIcon />
          <LikeIcon />
          <BorrowIcon />
        </View>
        <View style={styles.container}>
          <Pressable
            onPress={() => {
              setValue('나의 상품');
            }}
            style={styles.textbutton01}>
            <Text
              style={{color: value === '나의 상품' ? '#F05655' : '#8B95A1'}}>
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
        <View style={styles.container}>
          <Pressable
            onPress={() => refRBSheet1.current.open()}
            style={styles.searchSelection1}>
            <Text style={styles.myPageCategory}>{categoryValue}</Text>
            <DropdownIcon style={styles.dropdown} />
          </Pressable>
          <RBSheet
            ref={refRBSheet1}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
              container: {
                backgroundColor: '#fff',
                borderRadius: 20,
                height: 200,
              },
            }}>
            <Pressable
              onPress={() => {
                setCategoryValue('모든상품보기');
              }}
              style={styles.searchSelectionTitle}>
              <Text style={styles.searchSelectionTitle}>전체</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setCategoryValue('대여 가능');
              }}
              style={styles.searchSelectionOptions}>
              <Text
                style={{
                  color: categoryValue === '대여 가능' ? '#F05655' : '#333D4B',
                }}>
                대여 가능
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setCategoryValue('대여중');
              }}
              style={styles.searchSelectionOptions}>
              <Text
                style={{
                  color: categoryValue === '대여중' ? '#F05655' : '#333D4B',
                }}>
                대여중
              </Text>
            </Pressable>
          </RBSheet>
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
  },
  profile: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItem: 'center',
  },
  profileMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
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
    marginBottom: width * 18,
  },
  rateBox: {
    flexDirection: 'row',
    height: 40,
    width: 276,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: '#F05655',
    marginBottom: 30,
  },
  rateText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 12,
    fontWeight: 'light',
    color: '#F05655',
    marginTop: width * 9,
    marginBottom: width * 10,
    marginLeft: width * 18,
    marginRight: width * 6,
  },
  rateIcon: {
    height: 24,
    width: 24,
    marginTop: width * 6.3,
    marginBottom: width * 10,
    marginLeft: width * 6,
  },

  settings: {
    flexDirection: 'row',
    marginTop: width * 10,
    marginLeft: width * 260,
  },

  menu: {
    marginLeft: width * 2,
    width: width * 15,
    height: height * 15,
  },
  setting: {
    marginTop: width * 10,
    marginLeft: width * 10,
    width: width * 18,
    height: height * 18,
  },
  alarm: {
    marginTop: width * 12,
    marginLeft: width * 40,
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
    width: width * 12,
    height: height * 20,
  },
  textbutton02: {
    marginTop: width * 25,
    marginLeft: width * 5,
    marginHorizontal: width * 220,
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
