import React from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {width} from '../../../utils/globalStyles';
import {KakaoIcon} from '../../svg';
import Images from './../../../assets/imgs/index';

const KakaoLogin = ({navigation}) => {
  console.log(Images.login.login);
  return (
    <View style={styles.block}>
      <View>
        <Text>온 동네에 정을 나눠요</Text>
        <Text>당신 곁에서 만나는 따뜻함, 온정</Text>
        <Image
          style={styles.img}
          source={require('../../../assets/imgs/login_image.png')}
        />
      </View>
      <View>
        <Image />
        <Pressable>
          <KakaoIcon />
          <Text>카카오톡으로 계속하기</Text>
        </Pressable>
      </View>
      <Pressable>
        <Text>둘러보기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1, paddingHorizontal: width * 24, alignItems: 'center'},

  img: {marginVertical: width * 52},
});

export default KakaoLogin;
