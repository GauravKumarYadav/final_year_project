import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from '../screens/feed';
import FeedScreen from '../screens/FeedScreen';
import Stories from '../screens/stories';

const Navigation = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedScreen
    },
    Feed: {
        screen: Feed
    },
    Stories: {
        screen: Stories
    },
})
  
export default createAppContainer(Navigation)