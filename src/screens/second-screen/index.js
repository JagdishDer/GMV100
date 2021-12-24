import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {Button} from '../../components';
import OrderItem from '../../components/order-item';
import {Colors} from '../../constants';
import {client} from '../../services/api-service';
import styles from './style';

const SecondScreen = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SecondScreen;
