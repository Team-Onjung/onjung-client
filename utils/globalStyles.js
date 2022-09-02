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

  // MAIN COLOR
  $primary: '#FC7574',
  $secondary: '#FFE9E9',
  $tertiary: '#FFF3EF',
  $brown: '#454545',
};

export const fonts = {
  AppleSDGothicNeo_Light: 'AppleSDGothicNeoL',
  AppleSDGothicNeo_Medium: 'AppleSDGothicNeoM',
  AppleSDGothicNeo_ExtraBold: 'AppleSDGothicNeoEB',
  AppleSDGothicNeo_Bold: 'AppleSDGothicNeoB',
  AppleSDGothicNeo_Header: 'AppleSDGothicNeoH',
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
