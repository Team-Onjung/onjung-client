import React, {useRef, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {width, colors} from '../../../../utils/globalStyles';
import {v4 as uuidv4} from 'uuid';
import {CameraIcon, CloseIcon, MonoCameraIcon, PhtohIcon} from '../../../svg';
import RBSheet from 'react-native-raw-bottom-sheet';

const ImagePicker = ({form, setForm}) => {
  const [response, setResponse] = useState([]);

  const imagePickerOption = {
    mediaType: 'photo',
    maxWidth: 768,
    maxHeight: 768,
    includeBase64: Platform.OS === 'android',
  };

  const onPickImage = res => {
    // 취소 버튼을 눌렀거나, 선택된 이미지가 없을 경우 실행하지 않음
    if (res.didCancel || !res) {
      return;
    }

    const addRes = {uri: res.assets[0].uri, id: uuidv4()};
    const formImg = form.img;

    setResponse([...response, addRes]);
    setForm({...form, img: [...formImg, res.assets[0].uri]});
  };

  const onLaunchCamera = () => {
    // 카메라 촬영 후 업로드
    launchCamera(imagePickerOption, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    // 앨범에서 이미지 선택
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  const onRemove = id => {
    // response 배열에서 선택한 이미지의 id와 다른 것들만 모으기
    const nextarr = response.filter(img => img.id !== id);
    // nextarr 요소들의 uri 키값만 모아서 새로운 배열 만들기
    const nextFormImg = nextarr.map(item => item.uri);

    setResponse(nextarr);
    setForm({...form, img: nextFormImg});
  };

  const bottomSheetRef = useRef();

  return (
    <View style={styles.block}>
      <Pressable
        style={styles.picker}
        onPress={() => bottomSheetRef.current.open()}>
        <CameraIcon />
        {/* imgarray는 전부 response로  */}
        <Text style={styles.text}>{response.length}/12</Text>
      </Pressable>
      <ScrollView
        style={styles.imgArr}
        horizontal
        contentContainerStyle={styles.contentContainer}>
        {response.map((res, idx) => (
          <View
            key={res.id}
            style={[styles.extra, idx === response - 1 && styles.lastClose]}>
            <View style={styles.box}>
              {/* <View style={style.close}></View> */}
              <CloseIcon
                onPress={() => onRemove(res.id, res.uri)}
                id={res.id}
                style={[
                  styles.close,
                  idx === response.length - 1 && styles.lastClose,
                ]}
              />
              {/* uri: res?.assets[0]?.uri  */}
              <Image
                style={[
                  styles.img,
                  idx === response.length - 1 && styles.lastImg,

                  idx === 0 && styles.firstImg,
                ]}
                source={{uri: res.uri}}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <RBSheet
        ref={bottomSheetRef}
        animationType="slide"
        // closeOnDragDown={true}
        customStyles={{
          container: {
            borderTopLeftRadius: width * 20,
            borderTopRightRadius: width * 20,
            height: '20%',
            paddingTop: width * 20,
            paddingLeft: width * 24,
            justifyContent: 'flex-start',
          },
        }}>
        <Pressable
          style={styles.actionButton}
          android_ripple={{color: colors.$white}}
          onPress={() => {
            onLaunchCamera();
          }}>
          <MonoCameraIcon style={styles.icon} />
          <Text style={styles.modalText}>사진 촬영</Text>
        </Pressable>
        <Pressable
          style={styles.actionButton}
          android_ripple={{color: colors.$white}}
          onPress={() => {
            onLaunchImageLibrary();
          }}>
          <PhtohIcon style={styles.icon} />
          <Text style={styles.modalText}>사진 선택</Text>
        </Pressable>
      </RBSheet>
      {/* <ImgModal
        bottomSheetRef={bottomSheetRef}
        onLaunchCamera={onLaunchCamera}
        onLaunchImageLibrary={onLaunchImageLibrary}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    paddingBottom: width * 24,
    marginLeft: width * 24,
  },

  imgArr: {
    flexDirection: 'row',
    marginLeft: width * 8,
    width: '100%',

    // overflow: 'visible',
  },

  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingRight: width * 24,

    // overflow: 'hidden',
  },

  extra: {paddingTop: width * 24},

  box: {position: 'relative'},

  img: {
    width: width * 62,
    aspectRatio: 1,
    borderRadius: 10,
    marginHorizontal: width * 8,
  },

  firstImg: {marginLeft: 0},

  lastImg: {
    marginRight: 0,
  },

  close: {
    position: 'absolute',
    top: width * -6,
    right: 0,
    zIndex: 99,
    padding: 2,
  },

  lastClose: {
    right: width * -8,
  },

  picker: {
    width: width * 62,
    aspectRatio: 1,
    borderRadius: 10,
    marginTop: width * 24,
    backgroundColor: colors['$coral-1'],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 8,
  },

  text: {
    fontSize: width * 11,
    color: colors['$coral-4'],
    letterSpacing: width * -0.15,
  },

  whiteBox: {
    backgroundColor: 'white',
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: width * 8,
    marginVertical: width * 8,
  },
  modalText: {
    fontSize: width * 17,
    color: colors['$gray-4'],
    marginHorizontal: width * 8,
  },
});

export default ImagePicker;
