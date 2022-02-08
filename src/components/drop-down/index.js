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

export const Dropdown = ({
  label = '',
  data = [],
  onSelect = (item) => {},
  error = null,
  disabled = false,
}) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
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

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.item,
        {
          backgroundColor:
            selected?.label === item.label
              ? Colors.ui_grey_3
              : Colors.ui_grey_4,
        },
      ]}
      onPress={() => onItemPress(item)}>
      <AppText
        numberOfLines={1}
        size={14}
        color={Colors.ui_grey_2}
        style={styles.itemTitle}>
        {item.label}
      </AppText>
      {selected?.label === item.label ? (
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

      <AppText
        numberOfLines={1}
        size={14}
        color={Colors.ui_grey_1}
        style={styles.title}>
        {(selected && selected.label) || label}
      </AppText>
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
    flex: 1,
    marginStart: 10,
  },
  dropdown: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: Colors.ui_grey_4,
    width: DIMENSIONS.WIDTH / 1.12,
    shadowColor: Colors.ui_black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
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
