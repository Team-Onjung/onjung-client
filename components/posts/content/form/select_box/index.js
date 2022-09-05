import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, width} from '../../../../../utils/globalStyles';

const SelectBox = ({justifyContent, title, children, hasMarginRight}) => {
  return (
    <View style={[styles.block, {justifyContent: justifyContent}]}>
      <Text style={[styles.text, hasMarginRight && styles.marginRight]}>
        {title}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: width * 24,
    paddingVertical: width * 20,
    alignItems: 'center',
  },

  text: {
    color: colors['$gray-2'],
    ...fonts.H5,
  },

  marginRight: {
    marginRight: width * 16,
  },
});

export default SelectBox;
