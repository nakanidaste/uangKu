import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons, COLORS, SIZES, FONTS } from '../constants';

const CategoryHeaderSection = ({ mode }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: SIZES.padding,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
        <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>2 Total</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
            backgroundColor: mode === 'chart' ? COLORS.blue : null,
            borderRadius: 25,
          }}>
          <Image
            source={icons.piechart}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
            backgroundColor: mode === 'list' ? COLORS.blue : null,
            borderRadius: 25,
          }}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryHeaderSection;

const styles = StyleSheet.create({});
