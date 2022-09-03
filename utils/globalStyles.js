import {Dimensions} from 'react-native';

export const colors = {
  // BLACK
  $black: '#222222',

  // WHITE
  $white: '#FFF',

  // GRAY (Darker to Lighter)
  '$gray-1': '#191F28',
  '$gray-2': '#333D4B',
  '$gray-3': '#4E5968',
  '$gray-4': '#6B7684',
  '$gray-5': '#8B95A1',
  '$gray-6': '#B0B8C1',
  '$gray-7': '#D1D6DB',
  '$gray-8': '#E5E8EB',
  '$gray-9': '#F2F4F6',
  '$gray-10': '#F9FAFB',

  // Primary COLOR
  '$coral-4': '#F05655',
  '$coral-3': '#FC7574',
  '$coral-2': '#FFCCCC',
  '$coral-1': '#FFF3EF',
  $brown: '#454545',
};

export const basicDimensions = {
  height: 812,
  width: 375,
};

export const height =
  // 높이 변환
  (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2);

export const width =
  // 가로 변환
  (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2);

export const fonts = {
  H1: {fontFamily: 'AppleSDGothicNeoB', fontSize: width * 23},
  H2: {fontFamily: 'AppleSDGothicNeoB', fontSize: width * 21},
  H3: {fontFamily: 'AppleSDGothicNeoB', fontSize: width * 19},
  H4: {fontFamily: 'AppleSDGothicNeoB', fontSize: width * 17},
  H5: {fontFamily: 'AppleSDGothicNeoB', fontSize: width * 15},
  H6: {fontFamily: 'AppleSDGothicNeoB', fontSize: width * 13},
  H7: {fontFamily: 'AppleSDGothicNeoB', fontSize: width * 12},
  H8: {fontFamily: 'AppleSDGothicNeoB', fontSize: width * 11},
};
