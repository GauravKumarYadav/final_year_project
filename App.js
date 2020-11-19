import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { mapping, dark } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import FeedScreen from './src/screens/FeedScreen';
import Navigation from './src/navigation/Navigation';

export default class App extends React.Component {

  // render(){
  //   return (
  //     <View style={styles.container}>
  //       <FeedScreen/>
  //     </View>
  //   );
  // }
  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={dark}>
        <Navigation />
      </ApplicationProvider>
    )
  }

}

const styles = StyleSheet.create({
  container: {display:'flex',},

});