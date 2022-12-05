import React, {useState} from 'react';
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
import {width, height} from '../../../utils/globalStyles';
import data from './data.json';
import {useNavigation} from '@react-navigation/native';
import {request} from 'react-native-permissions';
import {cameraPermissions} from '../../config/platform';
import {colors} from '../../../utils/globalStyles';

const Chats = () => {
  const requestPermission = () => {
    request(cameraPermissions).then(navigation.navigate('CameraPage'));
  };
  const navigation = useNavigation();
  let tip = data.tip;
  const [value, setValue] = useState('대여 가능');
  return (
    <SafeAreaView>
      <ScrollView style={styles.chatContainer}>
        {tip.map((content, i) => (
          <View style={styles.chatList} key={i}>
            <Pressable
              onPress={() => {
                navigation.navigate('채팅');
              }}
              style={styles.total}>
              <Image
                style={styles.profileImage}
                source={require('../../../assets/imgs/main/Rectangle.png')}
              />
              <View style={styles.chat}>
                <Text style={styles.userName} numberOfLines={1}>
                  {content.user_name}
                </Text>
                <Text style={styles.chatContents}>{content.lastChat}</Text>
                <Text>{content.time}분 전</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    height: height * 600,
    marginTop: width * 50, //배너 넣으면 어떻까해서 만들어본 공백
  },

  chatList: {
    flex: 1,
    flexDirection: 'row',
  },
  total: {
    flexDirection: 'row',
  },
  profileImage: {
    flexDirection: 'row',
    width: width * 60,
    height: height * 65,
    borderRadius: 20,
    marginTop: width * 15,
    marginLeft: width * 25,
    marginRight: width * 5,
  },
  chat: {
    flexDirection: 'column',
    marginTop: width * 15,
    marginLeft: width * 5,
  },
  userName: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 15,
    color: colors.$black,
    marginBottom: width * 2,
  },
  chatContents: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: width * 15,
    color: colors['$gray-5'],
    marginBottom: width * 5,
    marginRight: width * 120,
  },
});

export default Chats;
