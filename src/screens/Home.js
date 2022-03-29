import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants';
import { NavBar, Header, CategoryHeaderSection } from '../components';

const Home = () => {
  const [viewMode, setViewMode] = useState('chart');

  return (
    <View style={styles.container}>
      <NavBar />
      <Header />
      <CategoryHeaderSection mode={viewMode} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgray2,
  },
});
