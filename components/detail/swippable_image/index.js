import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors, height, width} from '../../../utils/globalStyles';

const SwippableImage = ({imgs}) => {
  return (
    <Swiper
      width={375}
      height={375}
      removeClippedSubviews={false}
      dotColor={colors['$gray-7']}
      dotStyle={styles.dots}
      activeDotColor={colors.$white}
      activeDotStyle={styles.dots}
      paginationStyle={styles.pagination}>
      {imgs.map(img => (
        <Image
          key={img}
          style={styles.imgs}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KbX9ryNVL1pC8iXCLY6lNRAz37Aa7irCYg&usqp=CAU',
          }}
        />
      ))}
    </Swiper>
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
});

export default SwippableImage;
