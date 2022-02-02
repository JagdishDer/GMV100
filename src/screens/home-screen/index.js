import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '../../components';
import {Colors} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Button
          type={'default'}
          size={'default'}
          title={'Button Components'}
          onPress={() => navigation.navigate('buttons-screen')}
          style={styles.button}
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
  button: {
    width: '100%',
  },
});

export default Home;
