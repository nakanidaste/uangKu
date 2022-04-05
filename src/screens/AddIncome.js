import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavBar, Balance, IncomeExpenses, AddTransaction } from '../components';

const AddIncome = ({ navigation }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <View>
      <NavBar more={false} navigation={navigation} />
      <Balance />
      <IncomeExpenses />
      <AddTransaction
        valueText={text}
        onChangeText={e => setText(e)}
        valueAmount={amount}
        onChangeAmount={e => setAmount(e)}
      />
    </View>
  );
};

export default AddIncome;
