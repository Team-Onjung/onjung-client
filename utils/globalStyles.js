import {Dimensions} from 'react-native';

export const colors = {
  // Primary COLOR
  '$coral-5': '#F05655',
  '$coral-4': '#FC7574',
  '$coral-3': '#FFCCCC',
  '$coral-2': '#FFE9E9',
  '$coral-1': '#FFF3EF',

  // Secondary COLOR
  $black: '#222222',
  $white: '#FFF',
  $brown: '#454545',

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
  '$gray-11': '#EAECEF',
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
  H1: {
    fontFamily: 'AppleSDGothicNeoB',
    fontSize: width * 23,
    color: colors['$gray-2'],
  },
  H2: {
    fontFamily: 'AppleSDGothicNeoB',
    fontSize: width * 21,
    color: colors['$gray-2'],
  },
  H3: {
    fontFamily: 'AppleSDGothicNeoSB',
    fontSize: width * 19,
    color: colors['$gray-3'],
  },
  H4: {
    fontFamily: 'AppleSDGothicNeoSB',
    fontSize: width * 17,
    color: colors['$gray-3'],
  },
  H5: {
    fontFamily: 'AppleSDGothicNeoSB',
    fontSize: width * 15,
    color: colors['$gray-3'],
  },
  H6: {
    fontFamily: 'AppleSDGothicNeoR',
    fontSize: width * 13,
    color: colors['$gray-4'],
  },
  H7: {
    fontFamily: 'AppleSDGothicNeoR',
    fontSize: width * 12,
    color: colors['$gray-4'],
  },
  H8: {
    fontFamily: 'AppleSDGothicNeoR',
    fontSize: width * 11,
    color: colors['$gray-4'],
  },
};
