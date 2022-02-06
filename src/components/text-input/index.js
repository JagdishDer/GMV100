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
import {AppText} from '..';

export function CustomTextInput({
  value,
  label,
  labelRight,
  style,
  disabled,
  error,
  onChangeText,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const onCloseIconPress = () => {
    onChangeText('');
  };

  const onChangeInputText = (searchText) => {
    onChangeText(searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowCenter}>
        <View style={{flex: 1}}>
          {label ? (
            <AppText
              size={12}
              color={disabled ? Colors.ui_grey : Colors.ui_grey_2}>
              {label}
            </AppText>
          ) : null}
        </View>
        {labelRight ? (
          <AppText
            size={12}
            color={disabled ? Colors.ui_grey : Colors.ui_grey_2}>
            {labelRight}
          </AppText>
        ) : null}
      </View>
      <View
        style={[
          styles.inputContainer,
          {
            borderTopColor: error
              ? Colors.ui_error
              : isFocused
              ? Colors.ui_black
              : Colors.ui_grey_4,
            borderLeftColor: error
              ? Colors.ui_error
              : isFocused
              ? Colors.ui_black
              : Colors.ui_grey_4,
            borderRightColor: error
              ? Colors.ui_error
              : isFocused
              ? Colors.ui_black
              : Colors.ui_grey_4,
            borderBottomColor: error
              ? Colors.ui_error
              : disabled
              ? Colors.ui_grey_4
              : isFocused
              ? Colors.ui_black
              : Colors.ui_grey_2,
          },
        ]}>
        <TextInput
          {...props}
          value={value}
          editable={disabled ? false : true}
          style={[styles.input, style]}
          placeholderTextColor={Colors.ui_grey}
          autoCapitalize={'none'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeInputText}
        />
        {value.length > 0 ? (
          <TouchableOpacity onPress={onCloseIconPress} style={{padding: 5}}>
            <Image style={styles.closeIcon} source={Icons.close} />
          </TouchableOpacity>
        ) : null}
        {error ? (
          <Image style={styles.errorIcon} source={Icons.input_error} />
        ) : null}
      </View>
      {error ? (
        <AppText size={12} color={Colors.ui_error}>
          {error}
        </AppText>
      ) : null}
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
    paddingVertical: 3,
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
  closeIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: Colors.ui_grey_2,
  },
  errorIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

CustomTextInput.propTypes = {
  label: PropTypes.string,
  labelRight: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.any,
};

CustomTextInput.defaultProps = {
  label: '',
  labelRight: '',
  value: '',
  disabled: false,
  error: null,
};
