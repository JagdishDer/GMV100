import React, {FC, ReactElement, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Image,
} from 'react-native';
import {Colors, DIMENSIONS, Icons} from '../../constants';

export const Dropdown = ({label = '', data = [], onSelect = (item) => {}}) => {
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
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={styles.itemTitle}>{item.label}</Text>
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
      style={[
        styles.container,
        {
          borderColor: visible ? Colors.ui_grey_2 : Colors.ui_input_bg,
          borderBottomColor: Colors.ui_grey_2,
        },
      ]}
      onPress={toggleDropdown}>
      {data && data.length > 0 ? <View>{renderDropdown()}</View> : null}

      <Text numberOfLines={1} style={styles.title}>
        {(selected && selected.label) || label}
      </Text>
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
    width: DIMENSIONS.WIDTH / 1.2,
    backgroundColor: Colors.ui_input_bg,
    marginVertical: 5,
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
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    fontSize: 14,
    color: Colors.ui_grey_1,
    marginStart: 10,
  },
  dropdown: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: Colors.ui_input_bg,
    width: DIMENSIONS.WIDTH / 1.2,
    shadowColor: Colors.black,
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: Colors.ui_grey,
  },
  itemTitle: {
    fontSize: 14,
    color: Colors.ui_grey_2,
  },
});
