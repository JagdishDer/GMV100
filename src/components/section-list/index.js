import React, {useState} from 'react';
import {
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {AppText, SectionListHeader} from '..';
import {Colors, DIMENSIONS} from '../../constants';
import {FontTypes} from '../../constants/font-types';

const DATA = [
  {
    id: 1,
    title: 'Overview',
    data: ['Overview 1', 'Overview 2'],
  },
  {
    id: 2,
    title: 'Nodes',
    data: ['Nodes 1', 'Nodes 2', 'Nodes 3', 'Nodes 5', 'Nodes 6'],
  },
  {
    id: 3,
    title: 'Target Group',
    data: [
      'Target Group 1',
      'Target Group 2',
      'Target Group 3',
      'Target Group 4',
      'Target Group 5',
    ],
  },
];

export const SectionListComponent = ({data = DATA}) => {
  return (
    <View style={styles.container}>
      <AppText
        size={18}
        fontType={FontTypes.medium}
        style={{marginVertical: 10}}>
        {'Order List'}
      </AppText>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <SectionListHeader item={item} index={index} isUnOrdered={false} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <AppText
        size={18}
        fontType={FontTypes.medium}
        style={{marginVertical: 10}}>
        {'UnOrder List'}
      </AppText>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <SectionListHeader item={item} index={index} isUnOrdered={true} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ui_white,
  },
});
