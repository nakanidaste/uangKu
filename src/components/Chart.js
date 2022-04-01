import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { VictoryPie } from 'victory-native';
import data from '../constants/data';
import { COLORS, SIZES, FONTS } from '../constants';

const Chart = ({ mode, choice, category }) => {
  function processCategoryDataToDisplay() {
    let chartData = data.map(item => {
      let confirmExpenses = item.expenses.filter(a => a.status === 'C');
      var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

      return {
        name: item.name,
        y: total,
        expenseCount: confirmExpenses.length,
        color: item.color,
        id: item.id,
      };
    });

    let filterChartData = chartData.filter(a => a.y > 0);

    let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

    let finalChartData = filterChartData.map(item => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0);
      //console.log(percentage);
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    return finalChartData;
  }

  function setSelectedCategoryByName(name) {
    let category = data.filter(a => a.name === name);
    choice(category[0]);
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 40,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor:
            category && category.name === item.name ? item.color : COLORS.white,
        }}
        onPress={() => {
          let categoryName = item.name;
          setSelectedCategoryByName(categoryName);
        }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
                category && category.name === item.name
                  ? COLORS.white
                  : item.color,
              borderRadius: 5,
            }}></View>
          <Text
            style={{
              marginLeft: SIZES.base,
              ...FONTS.h3,
              color:
                category && category.name === item.name
                  ? COLORS.white
                  : COLORS.primary,
            }}>
            {item.name}
          </Text>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <Text
            style={{
              color:
                category && category.name === item.name
                  ? COLORS.white
                  : COLORS.primary,
              ...FONTS.h3,
            }}>
            {item.y} USD - {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const chartData = processCategoryDataToDisplay();
  const colorScales = chartData.map(item => item.color);
  const totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expenseCount || 0),
    0,
  );

  let data2 = processCategoryDataToDisplay();

  return (
    <ScrollView>
      {mode === 'chart' && (
        <View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <VictoryPie
              data={chartData}
              colorScale={colorScales}
              labels={datum => `${datum.y}`}
              radius={({ datum }) =>
                category && category.name === datum.name
                  ? SIZES.width * 0.4
                  : SIZES.width * 0.4 - 10
              }
              innerRadius={70}
              labelRadius={({ innerRadius }) =>
                (SIZES.width * 0.4 + innerRadius) / 2.5
              }
              style={{
                labels: { fill: COLORS.white, ...FONTS.body3 },
                parent: { ...styles.shadow },
              }}
              width={SIZES.width * 0.8}
              height={SIZES.width * 0.8}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: props => {
                            let categoryName = chartData[props.index].name;
                            setSelectedCategoryByName(categoryName);
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />

            <View style={{ position: 'absolute', top: '42%', left: '42%' }}>
              <Text style={{ ...FONTS.h1, textAlign: 'center' }}>
                {totalExpenseCount}
              </Text>
              <Text style={{ textAlign: 'center', ...FONTS.body3 }}>
                Expenses
              </Text>
            </View>
          </View>

          <View style={{ padding: SIZES.padding }}>
            <FlatList
              data={data2}
              renderItem={renderItem}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Chart;

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
