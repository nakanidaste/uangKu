import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants';
import {
  NavBar,
  Header,
  CategoryHeaderSection,
  CategoryList,
  Chart,
} from '../components';

const Home = ({ navigation }) => {
  const [viewMode, setViewMode] = useState('chart');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} more={true} />
      <Header />
      <CategoryHeaderSection mode={viewMode} toggle={setViewMode} />
      <CategoryList
        mode={viewMode}
        choice={setSelectedCategory}
        setToggle={setShowMoreToggle}
        toggle={showMoreToggle}
        category={selectedCategory}
      />
      <Chart
        mode={viewMode}
        choice={setSelectedCategory}
        category={selectedCategory}
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
