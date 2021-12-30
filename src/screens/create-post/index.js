import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../components';
import Mytextinput from '../../components/text-input';
import {Colors} from '../../constants';
import {createPost, updatePost} from '../../redux/actions/user-action';

const CreatePost = (props) => {
  const {navigation} = props;
  const {isUpdate, item} = props.route.params;

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [postId, setPostId] = useState(0);
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');

  useEffect(() => {
    if (isFocused) {
      if (isUpdate) {
        setPostId(item.id);
        setPostTitle(item.title);
        setPostDescription(item.body);
      }
    }
  }, [isFocused]);

  const onCreatePost = async () => {
    if (postTitle) {
      if (postDescription) {
        let requestData = {
          title: postTitle,
          body: postDescription,
          userId: 1,
        };
        const create_response = await dispatch(createPost(requestData));
        if (create_response.data) {
          alert('Post Created Successfully!');
          navigation.navigate('all-posts');
        } else {
          alert('Error while creating post!');
        }
      } else {
        alert('Please fill Post Description');
      }
    } else {
      alert('Please fill Post Title');
    }
  };

  const onUpdatePost = async () => {
    if (postTitle) {
      if (postDescription) {
        let requestData = {
          title: postTitle,
          body: postDescription,
          userId: 1,
          id: postId,
        };
        const update_response = await dispatch(updatePost(requestData));
        if (update_response.data) {
          alert('Post Updated Successfully!');
          navigation.navigate('all-posts');
        } else {
          alert('Error while updating post!');
        }
      } else {
        alert('Please fill Post Description');
      }
    } else {
      alert('Please fill Post Title');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <Mytextinput
            value={postTitle}
            placeholder="Post Title"
            onChangeText={setPostTitle}
          />
          <Mytextinput
            value={postDescription}
            placeholder="Post Description"
            onChangeText={setPostDescription}
            multiline={true}
            style={{height: 100}}
            textAlignVertical="top"
          />
          <Button
            title={isUpdate ? 'Update Post' : 'Create Post'}
            onPress={isUpdate ? onUpdatePost : onCreatePost}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.ui_white,
  },
});

export default CreatePost;
