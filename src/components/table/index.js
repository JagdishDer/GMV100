import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppText} from '..';
import {Colors, Icons} from '../../constants';
import {FontTypes} from '../../constants/font-types';

const TABLE_DATA = [
  {id: 1, columns: [1, 2, 3]},
  {id: 2, columns: [1, 2, 3]},
  {id: 3, columns: [1, 2, 3]},
];

export const Table = ({
  data = TABLE_DATA,
  selectedRows = [],
  onSelectRow = (item) => {},
}) => {
  const [borderWidth, setBorderWidth] = useState(1);

  const onRowItemPress = (item) => {
    setBorderWidth(borderWidth === 1 ? 2 : 1);
    let selectedItems = selectedRows;
    if (isRowItemSelected(item)) {
      const filteredSelected = selectedItems.filter(
        (selectedItem) => item.id != selectedItem.id,
      );
      onSelectRow(filteredSelected);
    } else {
      selectedItems.push(item);
      onSelectRow(selectedItems);
    }
  };

  const isRowItemSelected = (item) => {
    if (selectedRows.length > 0) {
      for (let seletedRow of selectedRows) {
        if (seletedRow.id === item.id) {
          return true;
        }
      }
    } else {
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image style={styles.searchIcon} source={Icons.search} />
        <TextInput
          placeholder={'Search here'}
          style={styles.input}
          placeholderTextColor={Colors.ui_grey_2}
        />
        <TouchableOpacity style={styles.addButton}>
          <AppText>{'Add new +'}</AppText>
        </TouchableOpacity>
      </View>
      <RenderRow isHeader={true} rowItem={data[0]} />
      <FlatList
        data={data}
        extraData={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={String(index)}
              onPress={() => onRowItemPress(item)}>
              <RenderRow rowItem={item} isSelected={isRowItemSelected(item)} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const RenderRow = ({isHeader = false, rowItem, isSelected = false}) => {
  let FontType = isHeader ? FontTypes.medium : FontTypes.regular;
  return (
    <View
      style={[
        styles.row,
        {backgroundColor: isHeader ? Colors.ui_grey_3 : Colors.ui_grey_4},
      ]}>
      <Image
        style={styles.icon}
        source={
          isHeader
            ? null
            : isSelected
            ? Icons.check_box_checked
            : Icons.check_box_unchecked
        }
      />
      {rowItem.columns.map((coulumItem, columnIndex) => {
        return (
          <View style={styles.column}>
            <AppText fontType={FontType}>{'Default cell header'}</AppText>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ui_grey_4,
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.ui_grey,
    padding: 10,
  },
  column: {
    flex: 1,
    alignSelf: 'stretch',
  },
  icon: {
    width: 24,
    height: 24,
    marginEnd: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginStart: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  addButton: {
    backgroundColor: Colors.ui_grey,
    padding: 10,
    height: '100%',
  },
});
