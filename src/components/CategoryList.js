import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React, { useRef } from 'react';
import data from '../constants/data';
import { COLORS, SIZES, FONTS, icons } from '../constants';

const CategoryList = ({ mode, choice, setToggle, toggle }) => {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115),
  ).current;

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 5,
          paddingVertical: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          borderRadius: 5,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
        onPress={() => choice(item)}>
        <Image
          source={item.icon}
          style={{
            width: 20,
            height: 20,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.primary,
            ...FONTS.h4,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {mode === 'list' && (
        <View>
          {/* function 1*/}
          <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
            <Animated.View style={{ height: categoryListHeightAnimationValue }}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                numColumns={2}
              />
            </Animated.View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginVertical: SIZES.base,
                justifyContent: 'center',
              }}
              onPress={() => {
                if (toggle) {
                  Animated.timing(categoryListHeightAnimationValue, {
                    toValue: 115,
                    duration: 300,
                    useNativeDriver: false,
                  }).start();
                } else {
                  Animated.timing(categoryListHeightAnimationValue, {
                    toValue: 172.5,
                    duration: 300,
                    useNativeDriver: false,
                  }).start();
                }
                setToggle(!toggle);
              }}>
              <Text style={{ ...FONTS.body4 }}>{toggle ? 'Less' : 'More'}</Text>
              <Image
                source={toggle ? icons.uarrow : icons.darrow}
                style={{
                  marginLeft: 5,
                  width: 17,
                  height: 17,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
          {/* function2 */}
        </View>
      )}
    </View>
  );
};

export default CategoryList;

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
});
