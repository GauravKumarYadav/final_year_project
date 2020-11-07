import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';
import firebase from 'firebase';


export default class LoadingScreen extends Component{
    
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.props.navigation.navigate('DashboardScreen');
            }else{
                this.props.navigation.navigate('Login');
            }
        })
    }
    
    render(){
        return(
            <View>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

}