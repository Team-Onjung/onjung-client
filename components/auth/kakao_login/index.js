import React from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {colors, fonts, width} from '../../../utils/globalStyles';
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
        <View style={styles.tooltip}>
          <View style={styles.triangle} />
          <Text style={styles.tooltipText}>
            간편하게 로그인하고{'\n'}우리 동네에서 정을 나눠보세요!
          </Text>
        </View>
      </View>
      <Pressable style={styles.kakaoButton}>
        <KakaoIcon />
        <Text style={styles.kakaoText}>카카오톡으로 계속하기</Text>
      </Pressable>

      <Pressable>
        <Text>둘러보기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1, paddingHorizontal: width * 24, alignItems: 'center'},

  img: {marginVertical: width * 52},

  tooltip: {
    backgroundColor: colors.$white,
    paddingVertical: width * 12,
    paddingHorizontal: width * 20,
    elevation: 5,
    borderRadius: width * 10,
    marginBottom: width * 25,
    position: 'relative',
  },

  triangle: {
    width: width * 10,
    height: width * 10,
    position: 'absolute',
    bottom: -width * 10,
    left: '50%',
    transform: [{translateX: width * 10}],
    borderLeftWidth: width * 10,
    borderLeftColor: 'transparent',
    borderRightWidth: width * 10,
    borderRightColor: 'transparent',
    borderTopWidth: width * 10,
    borderTopColor: colors.$white,
  },

  tooltipText: {textAlign: 'center', ...fonts.H6, color: colors['$gray-4']},

  kakaoButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5E14B',
    paddingVertical: width * 10,
    borderRadius: width * 10,
  },

  kakaoText: {
    fontFamily: 'AppleSDGothicNeoM',
    fontSize: width * 16,
    letterSpacing: width * -0.53,
    color: colors['$gray-1'],
  },
});

export default KakaoLogin;
