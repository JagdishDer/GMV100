import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './root-navigation';
import {FirstScreen, SecondScreen, ViewAllUsers} from '../screens';
import AllPosts from '../screens/all-posts';
import CreatePost from '../screens/create-post';
import HomeScreen from '../screens/home-screen';
import ButtonsScreen from '../screens/buttons';

const RootStack = createStackNavigator();

export default function () {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={'#000'}
      />
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator initialRouteName={'home-screen'}>
          <RootStack.Screen
            name={'home-screen'}
            component={HomeScreen}
            options={{title: 'Home', headerBackTitle: ''}}
          />
          <RootStack.Screen
            name={'buttons-screen'}
            component={ButtonsScreen}
            options={{title: 'Buttons', headerBackTitle: ''}}
          />
          <RootStack.Screen
            name={'first-screen'}
            component={FirstScreen}
            options={{title: 'Realm Example', headerBackTitle: ''}}
          />
          <RootStack.Screen
            name={'second-screen'}
            component={SecondScreen}
            options={{title: 'User Info', headerBackTitle: ''}}
          />
          <RootStack.Screen
            name={'view-all-users'}
            component={ViewAllUsers}
            options={{title: 'All Users', headerBackTitle: ''}}
          />
          <RootStack.Screen
            name={'create-post'}
            component={CreatePost}
            options={{title: 'Create Post', headerBackTitle: ''}}
          />
          <RootStack.Screen
            name={'all-posts'}
            component={AllPosts}
            options={{title: 'All Posts', headerBackTitle: ''}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}
