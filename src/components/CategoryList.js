import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import React, { useRef } from 'react';
import data from '../constants/data';
import { COLORS, SIZES, FONTS, icons } from '../constants';

const CategoryList = ({ mode, choice, setToggle, toggle, category }) => {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115),
  ).current;

  const allExpenses = category ? category.expenses : [];
  const incomingExpenses = allExpenses.filter(a => a.status === 'P');

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

  const itemRender = ({ item, index }) => (
    <View
      style={{
        width: 300,
        marginRight: SIZES.padding,
        marginLeft: index === 0 ? SIZES.padding : 0,
        marginTop: 10,
        marginBottom: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: COLORS.lightgray,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.base,
          }}>
          <Image source={category.icon} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={{ ...FONTS.h3, color: category.color }}>
          {category.name}
        </Text>
      </View>

      <View style={{ paddingHorizontal: SIZES.padding }}>
        <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
        <Text
          style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>
          {item.description}
        </Text>

        <Text style={{ marginVertical: 10, ...FONTS.h4 }}>Location</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={icons.pin}
            style={{ width: 20, height: 20, marginRight: 5 }}
          />
          <Text
            style={{
              marginBottom: SIZES.base,
              color: COLORS.darkgray,
              ...FONTS.body4,
            }}>
            {item.location}
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomEndRadius: SIZES.radius,
          borderBottomStartRadius: SIZES.radius,
          backgroundColor: category.color,
        }}>
        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
          {' '}
          CONFIRM {item.total.toFixed(2)} USD
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
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
          <View>
            <View
              style={{
                paddingHorizontal: SIZES.padding,
                paddingVertical: 10,
                //backgroundColor: COLORS.blue,
              }}>
              <Text style={{ ...FONTS.h3, color: COLORS.primary }}>
                INCOMING EXPENSES
              </Text>
              <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>
                12 Total
              </Text>
            </View>
            {incomingExpenses.length > 0 && (
              <>
                <FlatList
                  data={incomingExpenses}
                  renderItem={itemRender}
                  keyExtractor={item => `${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>
            )}
            {incomingExpenses.length === 0 && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 300,
                  //backgroundColor: COLORS.blue,
                }}>
                <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
                  No Record
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </ScrollView>
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
