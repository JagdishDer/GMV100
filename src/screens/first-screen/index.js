import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../../components';
import Realm from 'realm';
import {UserDetails, UserPosts} from '../../realm-schemas';
import {Colors} from '../../constants';
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
        style={styles.button}
        onPress={() => navigation.navigate('second-screen', {isUpdate: false})}
      />
      <Button
        title={'View All Users'}
        style={styles.button}
        onPress={() => navigation.navigate('view-all-users')}
      />
      <Text style={[styles.title, {marginTop: 30}]}>
        {'Realm Database Sync with Dynamic APIs data'}
      </Text>
      <Button
        title={'Create Post'}
        style={styles.button}
        onPress={() => navigation.navigate('create-post', {isUpdate: false})}
      />
      <Button
        title={'View All Posts'}
        style={styles.button}
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
    backgroundColor: Colors.ui_white,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    width: '100%',
  },
});

export default FisrtScreen;
