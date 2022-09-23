import {
  getProfile,
  login,
  loginWithKakaoAccount,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import React, {useState} from 'react';
import {Button, View} from 'react-native';

const KakaoLogin = () => {
  const [result, setResult] = useState();
  const signInWithKakao = async () => {
    try {
      const token = await loginWithKakaoAccount();

      setResult(JSON.stringify(token));
    } catch (err) {
      console.error(err.message);
    }
  };

  const signOutWithKakao = async () => {
    const message = await logout();

    setResult(message);
  };

  const getKakaoProfile = async () => {
    const profile = await getKakaoProfile();

    setResult(JSON.stringify(profile));
  };

  const unlinkKakao = async () => {
    const message = await unlink();

    setResult(message);
  };
  return (
    <View>
      <Button title="로그인" onPress={() => signInWithKakao()} />
    </View>
  );
};

export default KakaoLogin;
