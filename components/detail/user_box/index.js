import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {colors, fonts, height, width} from '../../../utils/globalStyles';
import FaceIcon from '../../../assets/icons/icon-face.svg';
{
  /* 
<View style={styles.user_box}>
  <View style={styles.user_content}>
    <Image
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
      }}
      style={styles.user_profile}
    />
    <View>
      <Text style={[styles.bold, {fontSize: 16}]}>{Data.user_name}</Text>
      <Text style={[styles.bold, {fontSize: 12, color: '#9e9e9e'}]}>
        {Data.location}
      </Text>
    </View>
  </View>
  <View style={styles.rate_box}>
    <Text style={[styles.bold, {color: colors.$primary}]}>
      ★ {Data.rates.toFixed(1)}
    </Text>
  </View>
</View>;
*/
}

const UserBox = ({img, name, location, comment, rate}) => {
  return (
    <View style={styles.block}>
      <View style={styles.user}>
        <Image style={styles.img} source={img} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>
            {location} • {comment}
          </Text>
        </View>
      </View>
      <View style={styles.rateBox}>
        <FaceIcon width={24} height={24} />
        <Text style={styles.rate}>정 {rate.toFixed(1)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 24,
    marginVertical: height * 18,
  },

  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  img: {
    borderRadius: width * 22,
    aspectRatio: 1,
    width: width * 44,
    height: height * 44,
    backgroundColor: colors['$gray-8'],
  },

  content: {
    justifyContent: 'center',
    paddingLeft: width * 12,
  },

  name: {
    ...fonts.H5,
    color: colors['$gray-3'],
    marginBottom: width * 3,
    height: height * 21,
    textAlignVertical: 'top',
  },

  desc: {...fonts.H7, color: colors['$gray-5']},

  rateBox: {
    width: width * 88,
    height: height * 32,
    borderRadius: width * 40,
    paddingLeft: width * 5,
    paddingRight: width * 12,
    paddingVertical: width * 4,
    borderColor: colors['$coral-3'],
    borderWidth: width * 1.3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  rate: {
    paddingLeft: width * 8,
    fontFamily: 'AppleSDGothicNeoB',
    fontSize: width * 16,
    letterSpacing: width * -0.5,
    color: colors['$coral-4'],
  },
});

export default UserBox;
