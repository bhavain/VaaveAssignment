import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from './src/Screens/HomeScreen'
import PostScreen from './src/Screens/PostScreen'
import UserScreen from './src/Screens/UserScreen'
import SearchScreen from './src/Screens/SearchScreen'




const AppStackNavigator = createStackNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: { title: "Home" } 
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: { title: "Search" } 
    },
    PostScreen: {
        screen: PostScreen,
        path: 'post/:postId',
    },
    UserScreen: {
        screen: UserScreen,
        path: 'user/:userId',
    },                          
  },
    {
      initialRouteName: "HomeScreen", 
      defaultNavigationOptions: ({ navigation, screenProps }) => ({
        title: <Text></Text>,
        headerTitleStyle:{fontSize:20,color:"black"},
        headerStyle: [{ height: 56, elevation:0 }],
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerBackground:() => (<LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#0671eb', '#00afdd']} style={{ flex: 1 }}/>),

        }),
      headerMode: "float",
    },
   
  
  )
  const AppContainer = createAppContainer(AppStackNavigator);

  const prefix = 'https://60ini.app.link/';

  const MainApp = () => <AppContainer uriPrefix={prefix} />;

  export default MainApp;  