import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

const IncomeExpenses = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        padding: SIZES.padding,
        justifyContent: 'space-between',
        marginHorizontal: SIZES.padding,
        ...styles.shadow,
      }}>
      <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1 }}>
        <Text style={styles.text}>Income</Text>
        <Text style={{ color: '#79EA86', ...FONTS.body2, marginTop: 5 }}>
          +$50.00
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.text}>Expense</Text>
        <Text
          style={{
            color: COLORS.red,
            ...FONTS.body2,
            marginTop: 5,
          }}>
          -$0.00
        </Text>
      </View>
    </View>
  );
};

export default IncomeExpenses;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.04,
    elevation: 3,
  },
  text: {
    color: COLORS.primary,
    ...FONTS.body3,
  },
});
