import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Realm from 'realm';
import {Colors} from '../../constants';
let realm;

const ViewAllUsers = (props) => {
  const {navigation} = props;
  const isFocused = useIsFocused();

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    if (isFocused) {
      realm = new Realm({path: 'UserDatabase.realm'});
      var user_details = realm.objects('user_details');
      setUsersList(user_details);
    }
  }, [isFocused]);

  const onDeletePress = (item) => {
    realm.write(() => {
      if (
        realm.objects('user_details').filtered('user_id =' + item.user_id)
          .length > 0
      ) {
        realm.delete(
          realm.objects('user_details').filtered('user_id =' + item.user_id),
        );
        var user_details = realm.objects('user_details');
        console.log(user_details);
        navigation.navigate('first-screen');
        Alert.alert(
          'Success',
          'User deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => {},
            },
          ],
          {cancelable: false},
        );
      } else {
        alert('Please insert a valid User Id');
      }
    });
  };

  const onEditPress = (item) => {
    navigation.navigate('second-screen', {isUpdate: true, item: item});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={usersList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={{flex: 1}}>
              <Text>Id: {item.user_id}</Text>
              <Text>Name: {item.user_name}</Text>
              <Text>Contact: {item.user_contact}</Text>
              <Text>Address: {item.user_address}</Text>
            </View>
            <View style={{justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => onDeletePress(item)}>
                <Text style={styles.deleteText}>{'Delete'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onEditPress(item)}>
                <Text style={[styles.deleteText, {color: Colors.ui_green}]}>
                  {'Edit'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.ui_white,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Colors.ui_grey,
    marginBottom: 10,
  },
  deleteText: {
    color: Colors.ui_error,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewAllUsers;
