import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {AppText} from '../../components';
import {Colors, DIMENSIONS} from '../../constants';
import {FontTypes} from '../../constants/font-types';

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};

const processChatData = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};

const pieChartData = [
  {
    name: 'Seoul',
    population: 215,
    color: Colors.ui_grey_2,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 280,
    color: Colors.ui_error,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527,
    color: Colors.ui_grey,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 853,
    color: Colors.ui_button_black,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 119,
    color: Colors.ui_green,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartWidth = DIMENSIONS.WIDTH / 1.05;
const chartHeight = DIMENSIONS.HEIGHT / 4;

const GraphScreen = () => {
  const chartConfig = {
    backgroundColor: Colors.ui_black,
    backgroundGradientFrom: Colors.ui_white,
    backgroundGradientTo: Colors.ui_white,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '0',
      strokeWidth: 2,
      stroke: Colors.ui_black,
    },
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
    strokeWidth: 2,
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 10}}>
        <AppText
          size={18}
          fontType={FontTypes.medium}
          style={{marginVertical: 10}}>
          {'Bar Chart'}
        </AppText>
        <BarChart
          style={styles.chartCard}
          data={lineChartData}
          width={chartWidth}
          height={chartHeight}
          //   yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />

        <AppText
          size={18}
          fontType={FontTypes.medium}
          style={{marginVertical: 10}}>
          {'Pie Chart'}
        </AppText>
        <PieChart
          data={pieChartData}
          width={chartWidth}
          height={chartHeight}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          absolute
        />

        <AppText
          size={18}
          fontType={FontTypes.medium}
          style={{marginVertical: 10}}>
          {'Line Chart'}
        </AppText>
        <LineChart
          data={lineChartData}
          width={chartWidth} // from react-native
          height={chartHeight}
          //   yAxisLabel="$"
          //   yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier
          style={styles.chartCard}
        />

        <AppText
          size={18}
          fontType={FontTypes.medium}
          style={{marginVertical: 10}}>
          {'Process Chart'}
        </AppText>
        <ProgressChart
          data={processChatData}
          width={chartWidth}
          height={chartHeight}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
          style={styles.chartCard}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ui_white,
  },
  chartCard: {
    marginVertical: 8,
    alignSelf: 'center',
    shadowColor: Colors.ui_black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default GraphScreen;
