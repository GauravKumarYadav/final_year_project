import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Stories from './stories';
import Feed from './feed';

export class FeedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.storyWrapper}>
                        <Stories/>
                    </View>
                    <Feed/>
                    <Feed/>
                    <Feed/>
                </ScrollView>
            </View>
        )
    }
}

export default FeedScreen

const styles = StyleSheet.create({
    container:{display:'flex',paddingTop:50},
})