import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from '../screens/feed';
import FeedScreen from '../screens/FeedScreen';
import Stories from '../screens/stories';
import MapScreen from '../screens/map';


const Navigation = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedScreen,
        navigationOptions:{
            tabBarIcon: ({ focused, tintColor }) =>{
                return <Icon name='home' size={24}/>
            }
        },
    },
    Feed: {
        screen: Feed,
        navigationOptions:{
            tabBarIcon : ({ focused, tintColor }) => {
                return <Icon name='rss' size={24}/>
            }
        }
    },
    MapScreen:{
        screen:MapScreen,
        navigationOptions:{
            tabBarIcon : ({ focused , tintColor }) => {
                return <Icon name='map-pin' size={24}/>
            }
        }
    },
    Stories: {
        screen: Stories,
        navigationOptions:{
            tabBarIcon : ({ focused , tintColor }) => {
                return <Icon name='map-marker' size={24}/>
            }
        }
    },
})
  
export default createAppContainer(Navigation)