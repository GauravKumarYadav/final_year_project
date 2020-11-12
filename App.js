import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigators/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import * as firebase from 'firebase';
import {firebaseConfig} from './src/config/config';

import SplashScreen from './src/screens/SplashScreen'
import FeedScreen from './src/screens/FeedScreen';
import Stories from './src/screens/stories'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
  state={
    isFontloaded:false,
  }
  
  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular': require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({isFontloaded:true});
  }

  render(){
    return (
      <View style={styles.container}>
        <FeedScreen/>
        {/* <SplashScreen/> */}
        {/* <AppNavigator/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {display:'flex',},

});
