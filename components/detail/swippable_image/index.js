import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors, height, width} from '../../../utils/globalStyles';
import ImageView from 'react-native-image-viewing';

const SwippableImage = ({imgs}) => {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  console.log(imgs);

  return (
    <>
      <Swiper
        width={375}
        height={375}
        removeClippedSubviews={false}
        dotColor={colors['$gray-7']}
        dotStyle={styles.dots}
        activeDotColor={colors.$white}
        activeDotStyle={styles.dots}
        paginationStyle={styles.pagination}>
        {imgs.map((img, i) => (
          <TouchableWithoutFeedback
            key={img.id}
            onPress={() => {
              setVisible(true);
              setIdx(i);
            }}>
            <Image
              style={styles.imgs}
              source={{
                uri: img.uri,
              }}
            />
          </TouchableWithoutFeedback>
        ))}
      </Swiper>
      <ImageView
        keyExtractor={0}
        images={imgs}
        imageIndex={idx}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {paddingHorizontal: 0},

  imgs: {
    width: width * 375,
    height: height * 375,
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: colors['$gray-9'],
  },

  dots: {
    width: width * 6,
    height: height * 6,
  },

  bg: {width: '100%', height: '100%', backgroundColor: '#000'},
});

export default SwippableImage;
