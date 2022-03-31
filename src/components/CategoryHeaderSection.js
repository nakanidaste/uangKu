import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons, COLORS, SIZES, FONTS } from '../constants';
import data from '../constants/data';

const CategoryHeaderSection = ({ mode, toggle }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
        <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>
          {data.length} Total
        </Text>
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
          }}
          onPress={() => toggle('chart')}>
          <Image
            source={icons.piechart}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: mode === 'chart' ? null : COLORS.darkgray,
            }}
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
          }}
          onPress={() => toggle('list')}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: mode === 'list' ? null : COLORS.darkgray,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryHeaderSection;

const styles = StyleSheet.create({});
