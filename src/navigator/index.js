import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './root-navigation';
import {FirstScreen, SecondScreen, ViewAllUsers} from '../screens';

const RootStack = createStackNavigator();

export default function () {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={'#000'}
      />
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator initialRouteName={'first-screen'}>
          <RootStack.Screen
            name={'first-screen'}
            component={FirstScreen}
            options={{title: 'First Screen'}}
          />
          <RootStack.Screen
            name={'second-screen'}
            component={SecondScreen}
            options={{title: 'Second Screen'}}
          />
          <RootStack.Screen
            name={'view-all-users'}
            component={ViewAllUsers}
            options={{title: 'All Users'}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}
