import { Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

const Balance = () => {
  return (
    <View style={{ padding: SIZES.padding }}>
      <Text style={{ color: COLORS.primary, ...FONTS.h4 }}>Your Balance</Text>
      <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>$100.00</Text>
    </View>
  );
};

export default Balance;
