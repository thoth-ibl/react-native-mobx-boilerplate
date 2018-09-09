import React from 'react';
import { Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import TrainStationsScreen from './screens/Screen.Train.Stations';
import AppAboutScreen from './screens/App.About.Screen';
import BusStopsScreen from './screens/Screen.Bus.Stops';
import { colors } from './utils/constants';

const AppMainTab = createBottomTabNavigator({
  "Train.Stations": {
    screen: TrainStationsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Train',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={'ios-train-outline'} size={30} color={tintColor} style={{paddingTop: 0}}/>
      ),
    }),
  },

  "Bus.Stops": {
    screen: BusStopsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Bus',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={'ios-bus-outline'} size={30} color={tintColor} style={{paddingTop: 0}}/>
      ),
    }),
  },
  "App.About": {
    screen: AppAboutScreen,
    navigationOptions: ({navigation}) => ({
      title: 'About',
      style: {
        backgroundColor: colors.BLACK
      },
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={'ios-flask-outline'} size={30} color={tintColor} style={{paddingTop: 0}}/>
      ),
    }),
  },
}, {
  headerMode: 'none', 
  tabBarOptions: {
    activeTintColor: colors.LIGHTBLUE,  //  Tint (i.e. icon and label color) of inactive tab items
    inactiveTintColor: colors.MIDGREY,  //  Tint (i.e. icon and label color) of inactive tab items
    inactiveBackgroundColor: colors.BLACK,  //  Background colour of inactive tab items
    activeBackgroundColor: colors.BLACK,  // Background colour of active tab item
    showIcon: true,   // Should the icons show on the tab bar?
    showLabel: true,  // Should the label show on the tab bar?
    indicatorStyle: {
      backgroundColor: colors.BLACK,
    },
    style: {  //  Tab bar styling
      backgroundColor: colors.BLACK,
      borderTopWidth: 1,
      borderTopColor: colors.CARBON,
      marginTop: 10,
      height: 55
    },
    upperCaseLabel: true  //  Should the tab bar labels be in CAPITALS?
  },
  tabBarPosition: 'bottom', // Where should our tabs be located?
  swipeEnabled: true, //  Swipe to nav between tabs? This won't work unless you're using `createMaterialTopTabNavigator` or `createMaterialBottomTabNavigator`
  animationEnabled: true, // Should swipe between tabs be animated? See note above.
  backBehavior: "initialRoute", // Where should you be taken when navigating with 'OS' back button?
  lazy: false // Should tab screens be lazy loaded?
});

const AppMainStack = createStackNavigator({
  Home: {
    screen: AppMainTab,
    navigationOptions: ({ navigation }) =>  ({
      title: "Panther",
      swipeEnabled: true,
      header: null,
      headerStyle: {
        backgroundColor: colors.CYAN,
      },
      headerTitleStyle: {
        color: colors.VIVIDWHITE,
        backgroundColor: colors.BLACK,
      },
      cardStyle: {
        backgroundColor: colors.BLACK,
      }
    }),
  },
}, {
  cardStyle: {
    backgroundColor: colors.BLACK,
  },
  mode: 'modal',
});


const Navigator = createBottomTabNavigator({
  Main: { screen: AppMainStack },
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarVisible: false,
    header: null,
    headerMode: 'none'
  },
  swipeEnabled: true
});

export default Navigator;
