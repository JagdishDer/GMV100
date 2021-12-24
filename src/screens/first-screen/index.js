import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Button} from '../../components';
import {Colors} from '../../constants';
import {client} from '../../services/api-service';
import styles from './style';

const FisrtScreen = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Button
        title={'Second Screen'}
        onPress={() => navigation.navigate('second-screen')}
      />
    </View>
  );
};

export default FisrtScreen;
