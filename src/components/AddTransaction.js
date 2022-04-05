import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

const AddTransaction = ({
  valueText,
  onChangeText,
  valueAmount,
  onChangeAmount,
}) => {
  return (
    <View style={{ padding: SIZES.padding }}>
      <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Add Income</Text>
      <View>
        <Text style={styles.text}>Where the money come from :</Text>
        <TextInput
          placeholder="Enter text"
          style={styles.textInput}
          onChangeText={onChangeText}
          value={valueText}
        />
      </View>
      <View>
        <Text style={styles.text}>Amount :</Text>
        <TextInput
          placeholder="Enter amount"
          style={styles.textInput}
          onChangeText={onChangeAmount}
          value={valueAmount.toString()}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Add Income</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  text: {
    color: COLORS.primary,
    ...FONTS.body4,
    marginVertical: SIZES.radius,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding,
  },
});
