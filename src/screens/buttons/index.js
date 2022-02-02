import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {AppText, Button} from '../../components';
import {ButtonSizes, ButtonTypes, Colors} from '../../constants';

const ButtonsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Default Buttons */}
        <View>
          <AppText size={18} color={Colors.ui_black}>
            {'Default Buttons'}
          </AppText>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.default}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.default}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.default}
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.default}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.default}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.default}
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.default}
              disabled
              title={'Button'}
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.default}
              disabled
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.default}
              disabled
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.default}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.default}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_button_black}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.default}
              icon={
                <AppText size={20} color={Colors.ui_button_black}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.default}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.default}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_button_black}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.default}
              icon={
                <AppText size={20} color={Colors.ui_button_black}>
                  {'+'}
                </AppText>
              }
            />
          </View>
        </View>

        {/* Medium Buttons */}
        <View>
          <AppText size={18} color={Colors.ui_black} style={{marginTop: 30}}>
            {'Medium Buttons'}
          </AppText>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.medium}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.medium}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.medium}
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.medium}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.medium}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.medium}
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.medium}
              disabled
              title={'Button'}
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.medium}
              disabled
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.medium}
              disabled
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.medium}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.medium}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_button_black}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.medium}
              icon={
                <AppText size={20} color={Colors.ui_button_black}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.medium}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.medium}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_button_black}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.medium}
              icon={
                <AppText size={20} color={Colors.ui_button_black}>
                  {'+'}
                </AppText>
              }
            />
          </View>
        </View>

        {/* Small Buttons */}
        <View>
          <AppText size={18} color={Colors.ui_black} style={{marginTop: 30}}>
            {'Small Buttons'}
          </AppText>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.small}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.small}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.small}
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.small}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.small}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.danger}
              size={ButtonSizes.small}
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.small}
              disabled
              title={'Button'}
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.small}
              disabled
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_white}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.default}
              size={ButtonSizes.small}
              disabled
              icon={
                <AppText size={20} color={Colors.ui_white}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.small}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.small}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_button_black}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.outline}
              size={ButtonSizes.small}
              icon={
                <AppText size={20} color={Colors.ui_button_black}>
                  {'+'}
                </AppText>
              }
            />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.small}
              title={'Button'}
            />
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.small}
              title={'Button'}
              icon={
                <AppText
                  size={20}
                  color={Colors.ui_button_black}
                  style={styles.marginEnd}>
                  {'+'}
                </AppText>
              }
            />
            <Button
              type={ButtonTypes.text}
              size={ButtonSizes.small}
              icon={
                <AppText size={20} color={Colors.ui_button_black}>
                  {'+'}
                </AppText>
              }
            />
          </View>
        </View>
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
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginEnd: {
    marginEnd: 10,
  },
});

export default ButtonsScreen;
