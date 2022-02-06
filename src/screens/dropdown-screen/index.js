import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {AppText, Dropdown, MultiSelectDropdown} from '../../components';
import {Colors} from '../../constants';
import {FontTypes} from '../../constants/font-types';

const DropDownComponents = () => {
  const OPTIONS = [
    {label: 'Option 1'},
    {label: 'Option 2'},
    {label: 'Option 3'},
    {label: 'Option 4'},
  ];

  const [selectedMultiple, setSelectedMultiple] = useState([OPTIONS[2]]);

  return (
    <View style={styles.container}>
      <AppText
        size={18}
        fontType={FontTypes.medium}
        style={{marginVertical: 10}}>
        {'DropDown Components'}
      </AppText>
      <Dropdown label={'Choose an option'} data={OPTIONS} />
      <Dropdown label={'Choose an option'} data={OPTIONS} disabled={true} />
      <Dropdown
        label={'Choose an option'}
        data={OPTIONS}
        error={'Error message here'}
      />

      <AppText
        size={18}
        fontType={FontTypes.medium}
        style={{marginVertical: 10}}>
        {'Multi Selection Components'}
      </AppText>
      <MultiSelectDropdown
        label={'Choose an option'}
        selectedLabels={selectedMultiple}
        onUpdateSelected={setSelectedMultiple}
        data={OPTIONS}
      />
      <MultiSelectDropdown
        label={'Choose an option'}
        selectedLabels={selectedMultiple}
        onUpdateSelected={setSelectedMultiple}
        data={OPTIONS}
        error={'Error message here'}
      />
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

export default DropDownComponents;
