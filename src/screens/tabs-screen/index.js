import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText, TabBar} from '../../components';
import {Colors} from '../../constants';
import {FontTypes} from '../../constants/font-types';

const TabsScreen = () => {
  return (
    <View style={styles.container}>
      <TabBar />
      <AppText
        size={18}
        fontType={FontTypes.medium}
        style={{marginVertical: 10}}>
        {'Icon'}
      </AppText>
      <TabBar iconOnly />
      <AppText
        size={18}
        fontType={FontTypes.medium}
        style={{marginVertical: 10}}>
        {'Inline/Ghost'}
      </AppText>
      <TabBar isInlineGhost />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.ui_white,
  },
});

export default TabsScreen;
