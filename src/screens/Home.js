import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants';
import {
  NavBar,
  Header,
  CategoryHeaderSection,
  CategoryList,
} from '../components';

const Home = () => {
  const [viewMode, setViewMode] = useState('chart');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  return (
    <View style={styles.container}>
      <NavBar />
      <Header />
      <CategoryHeaderSection mode={viewMode} toggle={setViewMode} />
      <CategoryList
        mode={viewMode}
        choice={setSelectedCategory}
        setToggle={setShowMoreToggle}
        toggle={showMoreToggle}
      />
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
