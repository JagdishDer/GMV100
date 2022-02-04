import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from '../../components';
import {Colors} from '../../constants';

const DropDownComponents = () => {
  const OPTIONS = [
    {label: 'Option 1'},
    {label: 'Option 2'},
    {label: 'Option 3'},
    {label: 'Option 4'},
  ];

  return (
    <View style={styles.container}>
      <Dropdown label={'Choose an option'} data={OPTIONS} />
      <Dropdown label={'Choose an option'} data={OPTIONS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ui_white,
  },
});

export default DropDownComponents;
