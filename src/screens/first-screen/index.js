import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Button} from '../../components';
import {Colors} from '../../constants';
import {client} from '../../services/api-service';
import styles from './style';
import Realm from 'realm';
let realm;

const FisrtScreen = (props) => {
  realm = new Realm({
    path: 'UserDatabase.realm',
    schema: [
      {
        name: 'user_details',
        properties: {
          user_id: {type: 'int', default: 0},
          user_name: 'string',
          user_contact: 'string',
          user_address: 'string',
        },
      },
    ],
  });

  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Button
        title={'Register'}
        onPress={() => navigation.navigate('second-screen', {isUpdate: false})}
      />
      <Button
        title={'View All Users'}
        onPress={() => navigation.navigate('view-all-users')}
      />
    </View>
  );
};

export default FisrtScreen;
