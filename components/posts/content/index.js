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
import {colors} from '../../../utils/globalStyles';
import PostForm from './form';
import ImagePicker from './img_picker';
import {height, width} from './../../../utils/globalStyles';

const PostContent = ({navigation, route}) => {
  const [form, setForm] = useState({
    img: '',
    title: '',
    category: '',
    start_date: '',
    end_date: '',
    min_dates: '',
    price: '',
    description: '',
  });

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
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
          <ImagePicker />
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
    color: colors.$primary,
    fontWeight: 'bold',
    letterSpacing: width * -0.24,
    fontSize: width * 17,
  },

  keyboardAvoidingView: {
    flex: 1,
  },

  block: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default PostContent;
