import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { VictoryPie } from 'victory-native';
import data from '../constants/data';
import { SIZES } from '../constants';

const Chart = ({ mode }) => {
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
      let percentage = (item.y / totalExpense + 100).toFixed(0);
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

  const chartData = processCategoryDataToDisplay();
  const colorScales = chartData.map(item => item.color);

  return (
    <ScrollView>
      {mode === 'chart' && (
        <View>
          <View>
            <VictoryPie
              data={chartData}
              colorScale={colorScales}
              labels={datum => `${datum.y}`}
              radius={SIZES.width * 0.4 - 10}
              innerRadius={70}
              labelRadius={({ innerRadius }) => SIZES.width * 0.4 + innerRadius}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Chart;

const styles = StyleSheet.create({});
