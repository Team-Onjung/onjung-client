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
      <View style={styles.settings}>
        <AlarmIcon
          onPress={() => {
            navigation.navigate('Search');
          }}
          style={styles.alarm}
        />
      </View>
      <View style={styles.borderLine} />
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
                source={require('../../../assets/imgs/main/blank-profile.png')}
              />
              <View style={styles.chat}>
                <Text style={styles.userName} numberOfLines={1}>
                  {content.user_name}
                </Text>
                <View flexDirection="row">
                  <Text
                    style={styles.chatContents}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {content.lastChat}
                  </Text>
                  <Text style={styles.chatContents}>• {content.time}분 전</Text>
                </View>
              </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  settings: {
    flexDirection: 'row',
    marginTop: width * 26,
    marginLeft: width * 330,
    marginBottom: width * 6,
  },

  chatContainer: {
    height: height * 600,
  },

  chatList: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: width * 5,
  },
  total: {
    flexDirection: 'row',
  },
  profileImage: {
    flexDirection: 'row',
    width: width * 46,
    height: height * 56,
    borderRadius: 100,
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
    fontSize: width * 12,
    color: colors['$gray-5'],
    marginBottom: width * 5,
    marginRight: width * 10,
    width: '45%',
  },
  borderLine: {
    height: 1,
    width: 360,
    backgroundColor: colors['$gray-7'],
    marginTop: width * 9,
    marginBottom: width * 9,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Chats;
