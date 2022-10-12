import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, height, colors} from '../../utils/globalStyles';
import {
  ArrowLeftIcon,
  ChildrenIcon,
  DigitalIcon,
  FurnitureIcon,
  KitchenIcon,
  LivingIcon,
  MFashionIcon,
  PopularIcon,
  WFashionIcon,
} from '../svg';

const Search = () => {
  const navigation = useNavigation();

  const onSubmit = () => {
    Keyboard.dismiss();
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.pop()}>
          <ArrowLeftIcon style={styles.goBack} />
        </Pressable>
      ),
      headerTitle: () => (
        <TextInput
          placeholder="온 동네에 정을 나눠요"
          style={styles.formField}
          placeholderTextColor={colors['$gray-6']}
        />
      ),
      headerRight: () => (
        <Pressable onPress={() => onSubmit()}>
          <Text style={styles.complete}>확인 </Text>
        </Pressable>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.block}>
      <Text style={styles.popularCategory}>인기 카테고리</Text>
      <View style={styles.pressables}>
        <Pressable
          style={styles.box}
          onPress={() => navigation.navigate('Detail', {title: '인기상품'})}>
          <PopularIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() => navigation.navigate('Detail', {title: '디지털기기'})}>
          <DigitalIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() => navigation.navigate('Detail', {title: '디지털기기'})}>
          <LivingIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() => navigation.navigate('Detail', {title: '디지털기기'})}>
          <FurnitureIcon />
        </Pressable>
      </View>
      <View style={styles.pressables}>
        <Pressable
          style={styles.box}
          onPress={() => navigation.navigate('Detail', {title: '인기상품'})}>
          <KitchenIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() => navigation.navigate('Detail', {title: '디지털기기'})}>
          <ChildrenIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() => navigation.navigate('Detail', {title: '디지털기기'})}>
          <WFashionIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() => navigation.navigate('Detail', {title: '디지털기기'})}>
          <MFashionIcon />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingTop: width * 25,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  pressables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 3,
    marginTop: width * 15,
  },

  box: {
    flex: 1,
    width: width * 88,
    height: height * 96,
    borderRadius: 20,
    backgroundColor: colors.$white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 6,
  },

  text: {
    fontSize: width * 17,
    fontFamily: 'AppleSDGothicNeoM',
    color: colors['$gray-2'],
    fontWeight: 'bold',
  },
  complete: {
    color: colors['$coral-4'],
    fontWeight: 'bold',
    letterSpacing: width * -0.24,
    fontSize: width * 15,
    marginRight: width * 20,
    marginTop: width * 20,
  },
  goBack: {
    marginLeft: width * 20,
    marginTop: width * 20,
  },
  popularCategory: {
    color: colors.$black,
    fontWeight: 'bold',
    letterSpacing: width * -0.24,
    fontSize: width * 17,
    marginTop: width * 12,
    marginBottom: width * 8,
    marginRight: 'auto',
    marginLeft: width * 24,
  },
  formField: {
    width: width * 250,
    height: height * 40,
    borderRadius: 5,
    backgroundColor: colors['$gray-9'],
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: width * 6,
    paddingLeft: width * 12,
    marginTop: width * 20,

    ...Platform.select({
      ios: {
        shadowColor: '#142742',
        shadowOpacity: 0.07,
        shadowRadius: 25,
        shadowOffset: {
          height: 2,
          width: 0,
        },
      },
      android: {
        elevation: 2,
      },
    }),
  },
});

export default Search;
