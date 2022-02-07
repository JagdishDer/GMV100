import React, {FC, ReactElement, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  Image,
} from 'react-native';
import {AppText} from '..';
import {Colors, DIMENSIONS, Icons} from '../../constants';

export const MultiSelectDropdown = ({
  label = '',
  data = [],
  selectedLabels = [],
  onUpdateSelected = (items) => {},
  error = null,
  disabled = false,
}) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const isLabelSelected = (item) => {
    if (selectedLabels.length > 0) {
      for (let seletedLabel of selectedLabels) {
        if (seletedLabel.label == item.label) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };

  const onItemPress = (item) => {
    if (isLabelSelected(item)) {
      const filteredSelected = selectedLabels.filter(
        (selectedItem) => item.label != selectedItem.label,
      );
      onUpdateSelected(filteredSelected);
    } else {
      selectedLabels.push(item);
      onUpdateSelected(selectedLabels);
    }
    setVisible(false);
  };

  const onRemoveSelectedItem = (item) => {
    const filteredSelected = selectedLabels.filter(
      (selectedItem) => item.label != selectedItem.label,
    );
    onUpdateSelected(filteredSelected);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.item,
        {
          backgroundColor: isLabelSelected(item)
            ? Colors.ui_grey_3
            : Colors.ui_grey_4,
        },
      ]}
      onPress={() => onItemPress(item)}>
      <AppText size={14} color={Colors.ui_grey_2} style={styles.itemTitle}>
        {item.label}
      </AppText>
      {isLabelSelected(item) ? (
        <Image style={styles.icon} source={Icons.check} />
      ) : null}
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View
            style={[
              styles.dropdown,
              {
                top: dropdownTop,
              },
            ]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      disabled={disabled}
      style={[
        styles.container,
        {
          opacity: disabled ? 0.5 : 1,
          borderColor: error
            ? Colors.ui_error
            : visible
            ? Colors.ui_grey_2
            : Colors.ui_grey_4,
          borderBottomColor: error ? Colors.ui_error : Colors.ui_grey_2,
        },
      ]}
      onPress={toggleDropdown}>
      {data && data.length > 0 ? <View>{renderDropdown()}</View> : null}

      <View style={{flexGrow: 1}}>
        {selectedLabels.length > 0 ? (
          <View
            style={{
              maxWidth: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            {selectedLabels.map((selectedItem, selectedIndex) => {
              return (
                <View
                  key={String(selectedIndex)}
                  style={styles.selectedLabelContainer}>
                  <AppText
                    numberOfLines={1}
                    size={14}
                    color={Colors.ui_grey_1}
                    style={styles.title}>
                    {selectedItem.label}
                  </AppText>
                  <TouchableOpacity
                    onPress={() => onRemoveSelectedItem(selectedItem)}>
                    <Image
                      style={[styles.icon, {marginStart: 5}]}
                      source={Icons.close}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        ) : (
          <AppText
            numberOfLines={1}
            size={14}
            color={Colors.ui_grey_1}
            style={styles.title}>
            {label}
          </AppText>
        )}
      </View>

      {error ? (
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={Icons.input_error} />
        </View>
      ) : null}
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={Icons.arrow_down} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: DIMENSIONS.WIDTH / 1.12,
    backgroundColor: Colors.ui_grey_4,
    marginVertical: 5,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.ui_grey_2,
    zIndex: 1,
  },
  selectedLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.ui_grey_3,
    marginStart: 10,
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  title: {
    marginStart: 10,
  },
  dropdown: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: Colors.ui_grey_4,
    width: DIMENSIONS.WIDTH / 1.12,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: Colors.ui_grey,
  },
  itemTitle: {
    flex: 1,
  },
});
