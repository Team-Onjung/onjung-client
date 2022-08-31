import React, {useLayoutEffect, useState} from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from '../../../utils/color';
import PostForm from './form';
import ImagePicker from './img_picker';

const PostContent = ({navigation, route}) => {
  const [form, setForm] = useState({
    img: '',
    title: '',
    category: '',
    dates: '',
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
      <SafeAreaView>
        <ImagePicker />
        <PostForm
          form={form}
          setForm={setForm}
          routeName={route.params.title}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  complete: {
    color: COLOR.$primary,
    fontWeight: 'bold',
    letterSpacing: -0.24,
    lineHeight: 20,
    fontSize: 17,
  },

  keyboardAvoidingView: {
    flex: 1,
  },

  block: {
    flex: 1,
    justifyContent: 'center',
  },

  form: {
    flex: 1,
  },
});

export default PostContent;
