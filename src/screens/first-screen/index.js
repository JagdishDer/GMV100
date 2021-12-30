import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../../components';
import Realm from 'realm';
import {UserDetails, UserPosts} from '../../realm-schemas';
let realm;

const FisrtScreen = (props) => {
  realm = new Realm({
    path: 'UserDatabase.realm',
    schema: [UserDetails, UserPosts],
  });

  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Local Realm Database'}</Text>
      <Button
        title={'Register'}
        onPress={() => navigation.navigate('second-screen', {isUpdate: false})}
      />
      <Button
        title={'View All Users'}
        onPress={() => navigation.navigate('view-all-users')}
      />
      <Text style={[styles.title, {marginTop: 30}]}>
        {'Realm Database Sync with Dynamic APIs data'}
      </Text>
      <Button
        title={'Create Post'}
        onPress={() => navigation.navigate('create-post', {isUpdate: false})}
      />
      <Button
        title={'View All Posts'}
        onPress={() => navigation.navigate('all-posts')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default FisrtScreen;
