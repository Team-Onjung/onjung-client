import React, {useRef, useState} from 'react';
import {
  ActionSheetIOS,
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
import ImageCropPicker from 'react-native-image-crop-picker';

const ImageSelector = ({form, setForm}) => {
  const [response, setResponse] = useState([]);
  const idx = useRef(1);

  const onPickImage = () => {
    ImageCropPicker.openPicker({
      compressImageMaxWidth: 768,
      compressImageMaxHeight: 768,
      cropping: true,
      multiple: true,
      maxFiles: 10,
      mediaType: 'photo',
    })
      .then(images => {
        images.map(image => {
          const nextImgs = {
            id: idx.current,
            uri: image.path,
            type: image.mime,
            name: image.filename,
          };

          idx.current += 1;

          setResponse([...response, nextImgs]);
          setForm({...form, imgs: response.concat(nextImgs)});
          console.log(form);
        });
      })
      // images.map(image => {
      //   console.log(image);
      //   let obj = {
      //     id: idx.current,
      //     uri: image.path,
      //     type: image.mime,
      //     name: `${images.modificationDate}${images.path}`,
      //   };
      //   idx.current += 1;

      //   console.log(obj);

      //   setResponse(() => {
      //     const nextRes = [...response];

      //     return [...response, obj];
      //   });
      //   console.log('response =', response);
      //   setForm({...form, img: response});
      //   console.log('form = ', form.img);
      // }),
      .catch(err => {
        console.log(err);
      });
    bottomSheetRef.current.close();
  };

  const imagePickerOption = {
    mediaType: 'photo',
    maxWidth: 768,
    maxHeight: 768,
    includeBase64: Platform.OS === 'android',
  };

  // const onPickImage = res => {
  //   // ?????? ????????? ????????????, ????????? ???????????? ?????? ?????? ???????????? ??????
  //   if (res.didCancel || !res) {
  //     return;
  //   }

  //   const addRes = {uri: res.assets[0].uri, id: uuidv4()};
  //   const formImg = form.img;

  //   setResponse([...response, addRes]);
  //   setForm({...form, img: [...formImg, res.assets[0].uri]});
  // };

  // const onLaunchCamera = () => {
  //   // ????????? ?????? ??? ?????????
  //   launchCamera(imagePickerOption, onPickImage);
  // };

  // const onLaunchImageLibrary = () => {
  //   // ???????????? ????????? ??????
  //   launchImageLibrary(imagePickerOption, onPickImage);
  // };

  const onRemove = id => {
    // response ???????????? ????????? ???????????? id??? ?????? ????????? ?????????
    const nextarr = response.filter(img => img.id !== id);
    // nextarr ???????????? uri ????????? ????????? ????????? ?????? ?????????
    const nextFormImg = nextarr.map(item => item.uri);

    setResponse(nextarr);
    setForm({...form, img: nextFormImg});
  };

  const bottomSheetRef = useRef();
  const modalOpen = () => {
    if (Platform.OS === 'android') {
      bottomSheetRef.current.open();
    } else {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['?????? ??????', '?????? ??????'],
          cancelButtonIndex: 2,
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            // onLaunchCamera();
          } else if (buttonIndex === 1) {
            onPickImage();
          }
        },
      );
    }
  };

  return (
    <View style={styles.block}>
      <Pressable style={styles.picker} onPress={modalOpen}>
        <CameraIcon />
        {/* imgarray??? ?????? response???  */}
        <Text style={styles.text}>{response.length}/12</Text>
      </Pressable>
      <ScrollView
        style={styles.imgArr}
        horizontal
        contentContainerStyle={styles.contentContainer}>
        {response.map((res, i) => (
          <View
            key={res.id}
            style={[styles.extra, i === response - 1 && styles.lastClose]}>
            <View style={styles.box}>
              {/* <View style={style.close}></View> */}
              <CloseIcon
                onPress={() => onRemove(res.id, res.uri)}
                id={res.id}
                style={[
                  styles.close,
                  i === response.length - 1 && styles.lastClose,
                ]}
              />
              {/* uri: res?.assets[0]?.uri  */}
              <Image
                style={[
                  styles.img,
                  i === response.length - 1 && styles.lastImg,

                  i === 0 && styles.firstImg,
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
          // wrapper: {backgroundColor: '#202227', opacity: 0.7},
          container: {
            borderTopLeftRadius: width * 20,
            borderTopRightRadius: width * 20,
            height: '20%',
            paddingTop: width * 20,
            paddingLeft: width * 24,
            justifyContent: 'flex-start',
            backgroundColor: colors.$white,
          },
        }}>
        <Pressable
          style={styles.actionButton}
          android_ripple={{color: colors.$white}}
          onPress={() => {
            // onLaunchCamera();
          }}>
          <MonoCameraIcon style={styles.icon} />
          <Text style={styles.modalText}>?????? ??????</Text>
        </Pressable>
        <Pressable
          style={styles.actionButton}
          android_ripple={{color: colors.$white}}
          onPress={() => {
            onPickImage();
          }}>
          <PhtohIcon style={styles.icon} />
          <Text style={styles.modalText}>?????? ??????</Text>
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

export default ImageSelector;
