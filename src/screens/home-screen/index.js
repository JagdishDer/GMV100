import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '../../components';
import {ButtonSizes, ButtonTypes, Colors} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Button
          type={ButtonTypes.outline}
          size={ButtonSizes.default}
          title={'Font Components'}
          onPress={() => navigation.navigate('fonts-screen')}
          style={styles.button}
        />
        <Button
          type={ButtonTypes.default}
          size={ButtonSizes.default}
          title={'Button Components'}
          onPress={() => navigation.navigate('buttons-screen')}
          style={styles.button}
        />
        <Button
          type={ButtonTypes.outline}
          size={ButtonSizes.default}
          title={'Input Components'}
          onPress={() => navigation.navigate('search-screen')}
          style={styles.button}
        />
        <Button
          type={ButtonTypes.default}
          size={ButtonSizes.default}
          title={'DropDown Components'}
          onPress={() => navigation.navigate('dropdown-screen')}
          style={styles.button}
        />
        <Button
          type={ButtonTypes.outline}
          size={ButtonSizes.default}
          title={'Tabs Components'}
          onPress={() => navigation.navigate('tabs-screen')}
          style={styles.button}
        />
        <Button
          type={ButtonTypes.default}
          size={ButtonSizes.default}
          title={'List Components'}
          onPress={() => navigation.navigate('sectionlist-screen')}
          style={styles.button}
        />
        <Button
          type={ButtonTypes.default}
          size={ButtonSizes.default}
          title={'Realm Example'}
          onPress={() => navigation.navigate('first-screen', {isUpdate: false})}
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
