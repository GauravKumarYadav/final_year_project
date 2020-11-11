import React , { Component } from 'react';
import {View , Text, StyleSheet, Settings,} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class HomeScreen extends Component {
    render(){
        return (
            <View>
                <Text>
                    home Screen
                </Text>
            </View>
        );
    }
}

class PostScreen extends Component {
    render(){
        return (
            <View>
                <Text>
                   Post Screen
                </Text>
            </View>
        );
    }
}

class ProfileScreen extends Component {
    render(){
        return (
            <View>
                <Text>
                    Profile Screen
                </Text>
            </View>
        );
    }
}


const Tab = createMaterialBottomTabNavigator();

const bottomTab = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
        name="Feed"
        component={ProfileScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="Notifications"
        component={ProfileScreen}
        options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
        }}
        />
    </Tab.Navigator>
);

export default bottomTab;