import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors} from '../../constants/colors';
import PropTypes from 'prop-types';
import {Icons} from '../../constants';

export function SearchInput({value, style, disabled, onChangeText, ...props}) {
  const [isFocused, setIsFocused] = useState(false);

  const onCloseIconPress = () => {
    onChangeText('');
  };

  const onChangeSearchText = (searchText) => {
    onChangeText(searchText);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            borderTopColor: isFocused ? Colors.ui_grey_2 : Colors.ui_grey_4,
            borderLeftColor: isFocused ? Colors.ui_grey_2 : Colors.ui_grey_4,
            borderRightColor: isFocused ? Colors.ui_grey_2 : Colors.ui_grey_4,
            borderBottomColor: disabled ? Colors.ui_grey_4 : Colors.ui_grey_2,
          },
        ]}>
        <View style={{marginEnd: 10}}>
          <Image style={styles.icon(disabled)} source={Icons.search} />
        </View>
        <TextInput
          {...props}
          value={value}
          editable={disabled ? false : true}
          style={[styles.input, style]}
          placeholderTextColor={Colors.ui_grey}
          autoCapitalize={'none'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeSearchText}
        />
        {value.length > 0 ? (
          <TouchableOpacity onPress={onCloseIconPress} style={{padding: 5}}>
            <Image style={styles.closeIcon} source={Icons.close} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    backgroundColor: Colors.ui_grey_4,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: Colors.ui_grey_2,
    fontSize: 14,
    fontWeight: '400',
  },
  icon: function (disabled) {
    return {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      tintColor: disabled ? Colors.ui_grey : Colors.ui_grey_2,
    };
  },
  closeIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: Colors.ui_grey_2,
  },
});

SearchInput.propTypes = {
  value: PropTypes.string,
  style: PropTypes.any,
  disabled: PropTypes.bool,
  onChangeText: PropTypes.func,
};

SearchInput.defaultProps = {
  value: '',
  disabled: false,
  onChangeText: (text) => {},
};
