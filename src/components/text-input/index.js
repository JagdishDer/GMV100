import React from 'react';
import {View, TextInput} from 'react-native';
import {Colors} from '../../constants';

const Mytextinput = (props) => {
  return (
    <View
      style={{
        marginBottom: 10,
        borderColor: Colors.ui_black,
        borderWidth: 1,
        borderRadius: 8,
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor={Colors.ui_grey}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={[
          props.style,
          {paddingTop: 10, paddingBottom: 10, paddingHorizontal: 15},
        ]}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};
export default Mytextinput;
