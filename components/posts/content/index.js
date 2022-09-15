import React, {useLayoutEffect, useState} from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PostForm from './form';
import ImagePicker from './img_picker';
import {width, colors} from './../../../utils/globalStyles';
import {ArrowLeftIcon} from '../../svg';

const PostContent = ({navigation, route}) => {
  const {height} = Dimensions.get('screen');
  const [form, setForm] = useState({
    img: [],
    title: '',
    category: '',
    start_date: new Date(),
    end_date: new Date(),
    min_dates: '',
    price: null,
    deposit: null,
    description: '',
  });

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.pop()}>
          <ArrowLeftIcon />
        </Pressable>
      ),
      title: `${route.params.title}`,
      headerRight: () => (
        <Pressable onPress={() => onSubmit()}>
          <Text style={styles.complete}>완료</Text>
        </Pressable>
      ),
    });
  });

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.block}>
        <ScrollView style={{height: height, flex: 1}}>
          <ImagePicker form={form} setForm={setForm} />
          <PostForm
            form={form}
            setForm={setForm}
            routeName={route.params.title}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  complete: {
    color: colors['$coral-4'],
    fontWeight: 'bold',
    letterSpacing: width * -0.24,
    fontSize: width * 17,
  },

  keyboardAvoidingView: {
    backgroundColor: colors.$white,
    flex: 1,
  },

  block: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default PostContent;
