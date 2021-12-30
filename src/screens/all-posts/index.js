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
import {useDispatch} from 'react-redux';
import Realm from 'realm';
import {Colors} from '../../constants';
import {UserPosts} from '../../realm-schemas';
import {deletePost, getAllPosts} from '../../redux/actions/user-action';
let realm;

const AllPosts = (props) => {
  const {navigation} = props;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [allPosts, setAllPosts] = useState([]);

  realm = new Realm({path: 'UserDatabase.realm'});

  useEffect(() => {
    if (isFocused) {
      const posts = realm.objects('all_posts');
      setAllPosts(posts);
      getPostsList();
    }
  }, [isFocused]);

  const getPostsList = async () => {
    const posts_response = await dispatch(getAllPosts());
    if (posts_response.status == 200 && posts_response.data) {
      // realm.write(() => {
      //   posts = realm.objects('all_posts');
      //   posts = posts_response.data;
      //   setAllPosts(posts);
      //   console.log('posts', posts);
      // });

      for (let post of posts_response.data) {
        realm.write(() => {
          var obj = realm.objects('all_posts').filtered('id =' + post.id);
          if (obj.length > 0) {
            console.log('update post');
            obj[0].userId = post.userId;
            obj[0].id = post.id;
            obj[0].body = post.body;
            obj[0].title = post.title;
          } else {
            realm.create('all_posts', {
              userId: post.userId,
              id: post.id,
              body: post.body,
              title: post.title,
            });
          }
        });
      }
      const posts = realm.objects('all_posts');
      setAllPosts(posts);
      console.log('posts updated...', posts);
    }
  };

  const onDeletePress = async (item) => {
    await dispatch(deletePost(item.id));
    realm.write(() => {
      if (realm.objects('all_posts').filtered('id =' + item.id).length > 0) {
        realm.delete(realm.objects('all_posts').filtered('id =' + item.id));
        var all_posts = realm.objects('all_posts');
        setAllPosts(all_posts);
        Alert.alert(
          'Success',
          'Post deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => {},
            },
          ],
          {cancelable: false},
        );
      } else {
        // alert('Please insert a valid Id');
      }
    });
    getPostsList();
  };

  const onEditPress = (item) => {
    navigation.navigate('create-post', {isUpdate: true, item: item});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={allPosts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
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
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ui_white,
  },
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

export default AllPosts;
