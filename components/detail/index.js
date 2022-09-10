import React, {useState} from 'react';
import {
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import HashTag from './hashtag';
import RentDatePicker from './rentPicker';
import {colors, width} from '../../utils/globalStyles';
import UserBox from './user_box';
import BorderIcon from '../../assets/icons/icon-border-line.svg';
import DetailHeader from './detail_header';
import SwippableImage from './swippable_image';
import DetailContent from './detail_content';
import PriceContainer from './price_container';

const Detail = () => {
  const imgArr = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
  ];

  const Data = {
    user_name: '얼리어답터 지우',
    user_profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
    location: '서초구 반포본동',
    rates: 5.0,
    title: 'PF50ka lg 빔프로젝터',
    category: '디지털 / 가전',
    content:
      '깨끗하게 사용해서 거의 새 것 수준입니다. \n집에서친구랑 영화볼 때 유용하게 사용해요 \n특별한 날을 위해 득템해가세요!!',
    start_date: '2022-10-11',
    end_date: '2022-10-17',
    duration: 6,
    rental_fee: 5000,
    deposit: 3000,
    feedback_cnt: 13,
    commission_fee: 1000,
  };
  const [date, setDate] = useState(3);

  const {width} = Dimensions.get('window');

  return (
    <ScrollView style={styles.block}>
      {Platform.OS === 'ios' && <DetailHeader />}
      <SwippableImage imgs={imgArr} />
      <UserBox
        img={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
        }}
        name={'얼리어답터 지우'}
        location={'서초구 반포본동'}
        comment={'후기 13'}
        rate={5.0}
      />

      <BorderIcon style={styles.border} />

      <DetailContent
        title={'PF50ka lg 빔프로젝터'}
        category={'디지털 / 가전'}
        time={'1분 전'}
        rental_fee={'5000'}
        status={'대여 가능'}
        content={
          '깨끗하게 사용해서 거의 새 것 수준입니다 집에서 친구랑 영화볼 때 유용하게 사용해요 특별한 날을 위해 득템해 가세요!! 깨끗하게 사용해서 거의 새 것 수준입니다\n\n집에서 친구랑 영화볼 때 유용하게 사용해요 특별한 날을 위해 득템해 가세요!!'
        }
      />

      <View style={styles.seperator} />

      <PriceContainer
        rental_fee={Data.rental_fee}
        deposit={Data.deposit}
        commission_fee={Data.commission_fee}
        duration={Data.duration}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: colors.$white},

  border: {
    marginHorizontal: width * 20,
  },

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

  seperator: {
    height: width * 8,
    backgroundColor: colors['$gray-9'],
  },
});

export default Detail;
