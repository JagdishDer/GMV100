import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../constants';
import Realm from 'realm';
let realm;

export default function PostItem({item, onDeletePress = (item) => {}}) {
  const navigation = useNavigation();

  useEffect(() => {
    realm = new Realm({path: 'UserDatabase.realm'});
    realm.write(() => {
      var obj = realm.objects('all_posts').filtered('id =' + item.id);
      if (obj.length > 0) {
        console.log('update post item');
        obj[0].userId = item.userId;
        obj[0].id = item.id;
        obj[0].body = item.body;
        obj[0].title = item.title;
      } else {
        realm.create('all_posts', {
          userId: item.userId,
          id: item.id,
          body: item.body,
          title: item.title,
        });
      }
    });
    console.log('Item Starting');
  }, []);

  const onEditPress = (item) => {
    navigation.navigate('create-item', {isUpdate: true, item: item});
  };

  return (
    <View style={styles.itemContainer}>
      <View style={{flex: 1}}>
        <Text>userId: {item.userId}</Text>
        <Text>Id: {item.id}</Text>
        <Text>Title: {item.title}</Text>
        <Text>Body: {item.body}</Text>
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
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Colors.ui_grey,
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 10,
  },
  deleteText: {
    color: Colors.ui_error,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
