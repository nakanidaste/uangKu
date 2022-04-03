import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { icons, COLORS, SIZES, FONTS } from '../constants';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

const NavBar = ({ navigation, more }) => {
  if (more) {
    return (
      <View style={styles.container(more)}>
        <Menu>
          <MenuTrigger>
            <Image source={icons.more} style={styles.icon} />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionWrapper: { padding: 10, marginLeft: 5 },
              optionText: styles.text,
            }}>
            <MenuOption
              text="Add Income"
              onSelect={() => navigation.navigate('AddIncome')}
            />
            <MenuOption text="Add Expanse" />
            <MenuOption text="About" />
          </MenuOptions>
        </Menu>
      </View>
    );
  }
  return (
    <View style={styles.container(more)}>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => navigation.goBack()}>
        <Image source={icons.arrow} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: more => ({
    flexDirection: more ? 'column' : 'row',
    height: 50,
    justifyContent: more ? 'center' : 'space-between',
    alignItems: more ? 'flex-end' : 'center',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  }),
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
  text: {
    color: COLORS.primary,
    ...FONTS.body3,
  },
});
