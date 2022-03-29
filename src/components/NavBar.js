import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { icons, COLORS, SIZES } from '../constants';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => console.log('Back')}>
        <Image source={icons.arrow} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.more} onPress={() => console.log('More')}>
        <Image source={icons.more} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
  },
  arrow: {
    justifyContent: 'center',
    width: 50,
  },
  more: {
    justifyContent: 'center',
    width: 50,
    alignItems: 'flex-end',
  },
});
