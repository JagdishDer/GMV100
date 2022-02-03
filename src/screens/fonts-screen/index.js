import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {AppText} from '../../components';
import {FontTypes} from '../../constants/font-types';

const FontsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Bold Fonts */}
        <AppText
          size={24}
          fontType={FontTypes.bold}
          color={Colors.ui_button_black}>
          {'Bold 700'}
        </AppText>
        <AppText
          size={22}
          fontType={FontTypes.bold}
          color={Colors.ui_button_black}>
          {'Bold 700'}
        </AppText>
        <AppText
          size={20}
          fontType={FontTypes.bold}
          color={Colors.ui_button_black}>
          {'Bold 700'}
        </AppText>
        <AppText
          size={18}
          fontType={FontTypes.bold}
          color={Colors.ui_button_black}>
          {'Bold 700'}
        </AppText>
        <AppText
          size={16}
          fontType={FontTypes.bold}
          color={Colors.ui_button_black}>
          {'Bold 700'}
        </AppText>
        <AppText
          size={14}
          fontType={FontTypes.bold}
          color={Colors.ui_button_black}>
          {'Bold 700'}
        </AppText>
        <AppText
          size={12}
          fontType={FontTypes.bold}
          color={Colors.ui_button_black}>
          {'Bold 700'}
        </AppText>
        <AppText
          size={10}
          fontType={FontTypes.bold}
          color={Colors.ui_button_black}>
          {'Bold 700'}
        </AppText>

        {/* Semi Bold Fonts */}
        <AppText
          size={24}
          fontType={FontTypes.semibold}
          color={Colors.ui_button_black}>
          {'Semi Bold 600'}
        </AppText>
        <AppText
          size={22}
          fontType={FontTypes.semibold}
          color={Colors.ui_button_black}>
          {'Semi Bold 600'}
        </AppText>
        <AppText
          size={20}
          fontType={FontTypes.semibold}
          color={Colors.ui_button_black}>
          {'Semi Bold 600'}
        </AppText>
        <AppText
          size={18}
          fontType={FontTypes.semibold}
          color={Colors.ui_button_black}>
          {'Semi Bold 600'}
        </AppText>
        <AppText
          size={16}
          fontType={FontTypes.semibold}
          color={Colors.ui_button_black}>
          {'Semi Bold 600'}
        </AppText>
        <AppText
          size={14}
          fontType={FontTypes.semibold}
          color={Colors.ui_button_black}>
          {'Semi Bold 600'}
        </AppText>
        <AppText
          size={12}
          fontType={FontTypes.semibold}
          color={Colors.ui_button_black}>
          {'Semi Bold 600'}
        </AppText>
        <AppText
          size={10}
          fontType={FontTypes.semibold}
          color={Colors.ui_button_black}>
          {'Semi Bold 600'}
        </AppText>

        {/* Medium Fonts */}
        <AppText
          size={24}
          fontType={FontTypes.medium}
          color={Colors.ui_button_black}>
          {'Medium 500'}
        </AppText>
        <AppText
          size={22}
          fontType={FontTypes.medium}
          color={Colors.ui_button_black}>
          {'Medium 500'}
        </AppText>
        <AppText
          size={20}
          fontType={FontTypes.medium}
          color={Colors.ui_button_black}>
          {'Medium 500'}
        </AppText>
        <AppText
          size={18}
          fontType={FontTypes.medium}
          color={Colors.ui_button_black}>
          {'Medium 500'}
        </AppText>
        <AppText
          size={16}
          fontType={FontTypes.medium}
          color={Colors.ui_button_black}>
          {'Medium 500'}
        </AppText>
        <AppText
          size={14}
          fontType={FontTypes.medium}
          color={Colors.ui_button_black}>
          {'Medium 500'}
        </AppText>
        <AppText
          size={12}
          fontType={FontTypes.medium}
          color={Colors.ui_button_black}>
          {'Medium 500'}
        </AppText>
        <AppText
          size={10}
          fontType={FontTypes.medium}
          color={Colors.ui_button_black}>
          {'Medium 500'}
        </AppText>

        {/* Regular Fonts */}
        <AppText
          size={24}
          fontType={FontTypes.regular}
          color={Colors.ui_button_black}>
          {'Regular 400'}
        </AppText>
        <AppText
          size={22}
          fontType={FontTypes.regular}
          color={Colors.ui_button_black}>
          {'Regular 400'}
        </AppText>
        <AppText
          size={20}
          fontType={FontTypes.regular}
          color={Colors.ui_button_black}>
          {'Regular 400'}
        </AppText>
        <AppText
          size={18}
          fontType={FontTypes.regular}
          color={Colors.ui_button_black}>
          {'Regular 400'}
        </AppText>
        <AppText
          size={16}
          fontType={FontTypes.regular}
          color={Colors.ui_button_black}>
          {'Regular 400'}
        </AppText>
        <AppText
          size={14}
          fontType={FontTypes.regular}
          color={Colors.ui_button_black}>
          {'Regular 400'}
        </AppText>
        <AppText
          size={12}
          fontType={FontTypes.regular}
          color={Colors.ui_button_black}>
          {'Regular 400'}
        </AppText>
        <AppText
          size={10}
          fontType={FontTypes.regular}
          color={Colors.ui_button_black}>
          {'Regular 400'}
        </AppText>
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
  button: {
    width: '100%',
  },
});

export default FontsScreen;
