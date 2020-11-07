import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigators/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import * as firebase from 'firebase';
import {firebaseConfig} from './src/config/config';

firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {
  state={
    isFontloaded:false
  }
  
  async componentDidMount(){
    
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular': require('./src/fonts/Montserrat-Regular.otf'),
    }).then( () => this.setState({isFontloaded:true}))
    
  }


  render(){
    return (
      // <AppNavigator/>
      (this.state.isFontloaded === true) ? (<AppNavigator/>) : (<AppLoading/>)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
