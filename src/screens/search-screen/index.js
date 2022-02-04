import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {AppText, CustomTextInput, SearchInput} from '../../components';
import {Colors} from '../../constants';
import {FontTypes} from '../../constants/font-types';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [textAreaField, setTextAreaField] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <AppText size={18} fontType={FontTypes.medium}>
          {'Search Components'}
        </AppText>
        <SearchInput
          value={searchText}
          placeholder={'Search here'}
          returnKeyType={'done'}
          onChangeText={setSearchText}
        />
        <SearchInput
          value={'Simulator'}
          placeholder={'Search here'}
          returnKeyType={'done'}
          onChangeText={(text) => {}}
        />
        <SearchInput value={''} disabled={true} placeholder={'Disabled'} />

        <AppText
          size={18}
          fontType={FontTypes.medium}
          style={{marginVertical: 15}}>
          {'TextInput Components'}
        </AppText>
        <CustomTextInput label={'Label'} placeholder={'Placeholder text'} />
        <CustomTextInput
          value={'Typing..'}
          label={'Label'}
          placeholder={'Placeholder text'}
          onChangeText={() => {}}
        />
        <CustomTextInput
          label={'Label'}
          placeholder={'Placeholder text'}
          error={'Error message here'}
          onChangeText={() => {}}
        />
        <CustomTextInput
          disabled={true}
          label={'Label'}
          placeholder={'Placeholder text'}
          onChangeText={() => {}}
        />

        {/* TextArea Input */}
        <AppText
          size={18}
          fontType={FontTypes.medium}
          style={{marginVertical: 15}}>
          {'TextArea Components'}
        </AppText>
        <CustomTextInput
          value={textAreaField}
          label={'Label'}
          labelRight={`${textAreaField.length}/100`}
          placeholder={'Placeholder text'}
          onChangeText={() => {}}
          onChangeText={setTextAreaField}
          style={{height: 100}}
        />
        <CustomTextInput
          value={textAreaField}
          label={'Label'}
          labelRight={`${textAreaField.length}/100`}
          placeholder={'Placeholder text'}
          onChangeText={() => {}}
          onChangeText={setTextAreaField}
          style={{height: 100}}
          error={'Error message'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ui_white,
  },
  scrollContainer: {
    padding: 20,
  },
});

export default SearchScreen;
