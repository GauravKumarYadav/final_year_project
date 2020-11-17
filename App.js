import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FeedScreen from './src/screens/FeedScreen';

export default class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <FeedScreen/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {display:'flex',},

});