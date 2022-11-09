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
import {AlarmIcon, CategotyIcon, SearchIcon} from '../../svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, height, colors} from '../../../utils/globalStyles';
import data from './data.json';
import {useNavigation} from '@react-navigation/native';
import {request} from 'react-native-permissions';
import {cameraPermissions} from '../../config/platform';
import RBSheet from 'react-native-raw-bottom-sheet';

const SearchResult = () => {
  const requestPermission = () => {
    request(cameraPermissions).then(navigation.navigate('CameraPage'));
  };
  const navigation = useNavigation();
  let tip = data.tip;
  const [value, setValue] = useState('대여 가능');
  const [categoryValue, setCategoryValue] = useState('모든 상품 보기');

  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setValue('대여 가능');
          }}
          style={styles.textbutton01}>
          <Text style={{color: value === '대여 가능' ? '#F05655' : '#8B95A1'}}>
            대여 가능
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setValue('대여 요청');
          }}
          style={styles.textbutton02}>
          <Text style={{color: value === '대여 요청' ? '#F05655' : '#8B95A1'}}>
            대여 요청
          </Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          onPress={() => refRBSheet1.current.open()}
          style={styles.searchSelection}>
          <Text>정확도순</Text>
        </Pressable>
        <Pressable
          onPress={() => refRBSheet2.current.open()}
          style={styles.searchSelection}>
          <Text>모든 상품 보기</Text>
        </Pressable>
        <Pressable
          onPress={() => refRBSheet3.current.open()}
          style={styles.searchSelection}>
          <Text>가격</Text>
        </Pressable>
        <RBSheet
          ref={refRBSheet1}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              backgroundColor: '#fff',
            },
          }}>
          <Pressable
            onPress={() => {
              setCategoryValue('모든상품보기');
              console.log('click');
            }}
            style={styles.searchSelectionOptions}></Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('모든상품보기');
              console.log('click');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '모든상품보기' ? '#F05655' : '#8B95A1'}}>
              정확도순
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('모든상품보기');
              console.log('click');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '모든상품보기' ? '#F05655' : '#8B95A1'}}>
              최신순
            </Text>
          </Pressable>
        </RBSheet>
        <RBSheet
          ref={refRBSheet2}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              backgroundColor: '#fff',
            },
          }}>
          <Pressable
            onPress={() => {
              setCategoryValue('모든상품보기');
              console.log('click');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '모든상품보기' ? '#F05655' : '#8B95A1'}}>
              모든상품보기
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('인기상품');
            }}
            style={styles.searchSelectionOptions}>
            <Text style={{color: value === '인기상품' ? '#F05655' : '#8B95A1'}}>
              인기상품
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('디지털기기');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '디지털기기' ? '#F05655' : '#8B95A1'}}>
              디지털기기
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('생활가전');
            }}
            style={styles.searchSelectionOptions}>
            <Text style={{color: value === '생활가전' ? '#F05655' : '#8B95A1'}}>
              생활가전
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('가구/인테리어');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{
                color: value === '가구/인테리어' ? '#F05655' : '#8B95A1',
              }}>
              가구/인테리어
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('생활/주방');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '생활/주방' ? '#F05655' : '#8B95A1'}}>
              생활/주방
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('유아동');
            }}
            style={styles.searchSelectionOptions}>
            <Text style={{color: value === '유아동' ? '#F05655' : '#8B95A1'}}>
              유아동
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('여성패션/잡화');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{
                color: value === '여성패션/잡화' ? '#F05655' : '#8B95A1',
              }}>
              여성패션/잡화
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('남성패션/잡화');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{
                color: value === '남성패션/잡화' ? '#F05655' : '#8B95A1',
              }}>
              남성패션/잡화
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('뷰티/미용');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '뷰티/미용' ? '#F05655' : '#8B95A1'}}>
              뷰티/미용
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('스포츠/레져');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '스포츠/레져' ? '#F05655' : '#8B95A1'}}>
              스포츠/레져
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('취미/게임/음반');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{
                color: value === '취미/게임/음반' ? '#F05655' : '#8B95A1',
              }}>
              취미/게임/음반
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('캠핑용품');
            }}
            style={styles.searchSelectionOptions}>
            <Text style={{color: value === '캠핑용품' ? '#F05655' : '#8B95A1'}}>
              캠핑용품
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('도서');
            }}
            style={styles.searchSelectionOptions}>
            <Text style={{color: value === '도서' ? '#F05655' : '#8B95A1'}}>
              도서
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('반려동물용품');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '반려동물용품' ? '#F05655' : '#8B95A1'}}>
              반려동물용품
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('식물');
            }}
            style={styles.searchSelectionOptions}>
            <Text style={{color: value === '식물' ? '#F05655' : '#8B95A1'}}>
              식물
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCategoryValue('기타');
            }}
            style={styles.searchSelectionOptions}>
            <Text style={{color: value === '기타' ? '#F05655' : '#8B95A1'}}>
              기타
            </Text>
          </Pressable>
        </RBSheet>
        <RBSheet
          ref={refRBSheet3}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              backgroundColor: '#fff',
            },
          }}>
          <Pressable
            onPress={() => {
              setCategoryValue('모든상품보기');
              console.log('click');
            }}
            style={styles.searchSelectionOptions}>
            <Text
              style={{color: value === '모든상품보기' ? '#F05655' : '#8B95A1'}}>
              모든상품보기
            </Text>
          </Pressable>
        </RBSheet>
      </View>
      {/* <View style={styles.container}>
        <SelectList
          data={categorySelection}
          setSelected={setCategoryValue}
          boxStyles={{
            marginLeft: width * 20,
            marginTop: width * 8,
            width: width * 60,
            height: width * 30,
            paddingTop: width * 6,
            paddingHorizontal: width * 10,
          }}
          inputStyles={{fontSize: width * 10}}
          dropdownStyles={{
            marginLeft: width * 20,
            marginTop: width * 0,
            width: width * 60,
          }}
          placeholder="가격"
          maxHeight={1000}
        />
        <SelectList
          data={categorySelection}
          setSelected={setCategoryValue}
          boxStyles={{
            marginLeft: width * 10,
            marginTop: width * 8,
            width: width * 100,
            height: width * 30,
            paddingTop: width * 6,
            paddingHorizontal: width * 10,
          }}
          inputStyles={{fontSize: width * 10}}
          dropdownStyles={{
            marginLeft: width * 10,
            marginTop: width * 0,
            width: width * 100,
          }}
          placeholder="모든 상품 보기"
          maxHeight={1000}
        />
        <SelectList
          data={categorySelection}
          setSelected={setCategoryValue}
          boxStyles={{
            marginHorizontal: width * 10,
            marginTop: width * 8,
            width: width * 70,
            height: width * 30,
            paddingTop: width * 6,
            paddingHorizontal: width * 10,
          }}
          inputStyles={{fontSize: width * 10}}
          dropdownStyles={{
            marginLeft: width * 10,
            marginTop: width * 0,
            width: width * 70,
          }}
          placeholder="최신순"
          maxHeight={1000}
        />
      </View> */}
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
                source={require('../../../assets/imgs/main/Rectangle.png')}
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
  searchSelection: {
    marginLeft: width * 20,
    marginTop: width * 8,
    width: width * 100,
    height: width * 40,
    paddingTop: width * 10,
    paddingHorizontal: width * 10,
    borderColor: '#333D4B',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 0.5,
  },
  contentContainer: {
    height: height * 500,
    marginTop: width * 5,
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
  searchSelectionOptions: {
    marginLeft: width * 20,
    marginTop: width * 8,
    width: width * 100,
    height: width * 30,
    paddingTop: width * 6,
    paddingHorizontal: width * 10,
  },
});

export default SearchResult;
