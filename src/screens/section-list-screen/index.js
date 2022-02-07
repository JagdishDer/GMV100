import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SectionListComponent} from '../../components';
import {Colors} from '../../constants';

const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionListComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.ui_white,
  },
});

export default SectionListScreen;
