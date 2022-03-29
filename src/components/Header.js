import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { icons, COLORS, SIZES, FONTS } from '../constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h2}>My Expense</Text>
        <Text style={styles.h3}>Summary (private)</Text>
      </View>

      <View style={styles.calendar}>
        <View style={styles.iconWrapper}>
          <Image source={icons.calendar} style={styles.icon} />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
            29 Maret, 2022
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
            18% more than last month
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.lightgray,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightblue,
  },
  h2: {
    color: COLORS.primary,
    ...FONTS.h2,
  },
  h3: {
    color: COLORS.darkgray,
    ...FONTS.h3,
  },
  calendar: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
  infoWrapper: {
    marginLeft: SIZES.padding,
  },
});
