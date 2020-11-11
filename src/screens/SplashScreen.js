import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


export default class SplashScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={ require('../images/foodReview.png') }/>
                </View>
                <View style={ styles.logoContainer }>
                    <View>
                        <Text style={styles.by}>By</Text>
                    </View>
                    <View>
                        <Image style={styles.logo} source={ require('../images/team.png') } />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: '#F5FCFF',
        alignItems:"center",
    },
    iconContainer:{
        paddingTop:200,
    },
    logoContainer:{
        paddingVertical:380
    },
    icon:{
        width: 200,
        height: 200,
    },
    logo:{
        resizeMode:'contain',
        width:275,
        height:170,
    },
    by:{
        fontSize:40,
        fontFamily:'SemiBold',
        textAlign:'center',
        color:'grey',
    }
});