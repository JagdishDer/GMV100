import React, {useEffect, useState} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import {Button} from '../../components';
import styles from './style';
import Mytextinput from '../../components/text-input';
import {useIsFocused} from '@react-navigation/native';
import Realm from 'realm';
let realm;

const SecondScreen = (props) => {
  const {navigation} = props;
  const {isUpdate, item} = props.route.params;

  const isFocused = useIsFocused();

  realm = new Realm({path: 'UserDatabase.realm'});

  const [user_id, setUserId] = useState(null);
  const [user_name, setUsername] = useState('');
  const [user_contact, setUserContact] = useState('');
  const [user_address, setUserAddress] = useState('');

  useEffect(() => {
    if (isFocused) {
      if (isUpdate) {
        setUserId(item.user_id);
        setUsername(item.user_name);
        setUserContact(item.user_contact);
        setUserAddress(item.user_address);
      }
    }
  }, [isFocused]);

  const register_user = () => {
    if (user_name) {
      if (user_contact) {
        if (user_address) {
          realm.write(() => {
            var ID =
              realm.objects('user_details').sorted('user_id', true).length > 0
                ? realm.objects('user_details').sorted('user_id', true)[0]
                    .user_id + 1
                : 1;
            realm.create('user_details', {
              user_id: ID,
              user_name: user_name,
              user_contact: user_contact,
              user_address: user_address,
            });
            navigation.navigate('view-all-users');
            Alert.alert(
              'Success',
              'You are registered successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => {},
                },
              ],
              {cancelable: false},
            );
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
    }
  };

  const update_user = () => {
    if (user_name) {
      if (user_contact) {
        if (user_address) {
          realm.write(() => {
            var obj = realm
              .objects('user_details')
              .filtered('user_id =' + user_id);
            console.log('obj', obj);
            if (obj.length > 0) {
              obj[0].user_name = user_name;
              obj[0].user_contact = user_contact;
              obj[0].user_address = user_address;
              navigation.goBack();
              Alert.alert(
                'Success',
                'User updated successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => {},
                  },
                ],
                {cancelable: false},
              );
            } else {
              alert('User Updation Failed');
            }
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <Mytextinput
            value={user_name}
            placeholder="Enter Name"
            onChangeText={setUsername}
          />
          <Mytextinput
            value={user_contact}
            placeholder="Enter Contact No"
            onChangeText={setUserContact}
            maxLength={10}
            keyboardType="numeric"
          />
          <Mytextinput
            value={user_address}
            placeholder="Enter Address"
            onChangeText={setUserAddress}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top'}}
          />
          <Button
            title="Submit"
            onPress={isUpdate ? update_user : register_user}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SecondScreen;
