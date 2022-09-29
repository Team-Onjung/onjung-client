import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, height, colors} from '../../utils/globalStyles';
import {
  BeautyIcon,
  BooksIcon,
  CampingIcon,
  ChildrenIcon,
  DigitalIcon,
  FurnitureIcon,
  HobbyIcon,
  KitchenIcon,
  LivingIcon,
  MFashionIcon,
  PetsIcon,
  PlantsIcon,
  PopularIcon,
  SportsIcon,
  WFashionIcon,
} from '../svg';

const Category = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.block}>
      <View style={styles.pressables}>
        <Pressable
          style={styles.box}
          onPress={() => navigation.navigate('검색결과', {title: '인기상품'})}>
          <PopularIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <DigitalIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <LivingIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <FurnitureIcon />
        </Pressable>
      </View>
      <View style={styles.pressables}>
        <Pressable
          style={styles.box}
          onPress={() => navigation.navigate('검색결과', {title: '인기상품'})}>
          <KitchenIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <ChildrenIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <MFashionIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <WFashionIcon />
        </Pressable>
      </View>
      <View style={styles.pressables}>
        <Pressable
          style={styles.box}
          onPress={() => navigation.navigate('검색결과', {title: '인기상품'})}>
          <CampingIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <HobbyIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <SportsIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <BeautyIcon />
        </Pressable>
      </View>
      <View style={styles.pressables}>
        <Pressable
          style={styles.box}
          onPress={() => navigation.navigate('검색결과', {title: '인기상품'})}>
          <BooksIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <PetsIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <PlantsIcon />
        </Pressable>
        <Pressable
          style={[styles.box]}
          onPress={() =>
            navigation.navigate('검색결과', {title: '디지털기기'})
          }>
          <PlantsIcon />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
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

  text: {
    fontSize: width * 17,
    fontFamily: 'AppleSDGothicNeoM',
    color: colors['$gray-2'],
    fontWeight: 'bold',
  },
});

export default Category;
