import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavBar, Balance, IncomeExpenses } from '../components';

const AddIncome = ({ navigation }) => {
  return (
    <View>
      <NavBar more={false} navigation={navigation} />
      <Balance />
      <IncomeExpenses />
    </View>
  );
};

export default AddIncome;

const styles = StyleSheet.create({});
