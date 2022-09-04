import React, {useLayoutEffect, useState} from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PostForm from './form';
import ImagePicker from './img_picker';
import {height, width, colors} from './../../../utils/globalStyles';
import ArrowLeft from '../../../assets/icons/icon-arrow-left.svg';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';

const PostContent = ({navigation, route}) => {
  const [form, setForm] = useState({
    img: [],
    title: '',
    category: '',
    start_date: new Date(),
    end_date: new Date(),
    min_dates: '',
    price: '',
    deposit: '',
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
          <ArrowLeft />
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
        <ScrollView>
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
