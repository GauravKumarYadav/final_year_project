import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { withOrientation } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import * as firebase from 'firebase';

export default class Login extends React.Component{
    
    constructor(props){
        super(props)

        this.state = ({
            email: '',
            password: '',
        })
    }

    loginUser = (email,password) =>{
        try{
            firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
                console.log(user)
            })

        }catch(error){
            console.log(error.toString())
        }
    }

    
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <Image source = {require("../images/food.png")} 
                    style={{width:"100%",height:"43%"}}
                />
                <Text style={styles.LoginPage}>Food Review App</Text>
                <Text style={styles.abc}>
                    - node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:109:6 in __guard$argument_0
                    - node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:364:10 in __guard
                    - node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:108:4 in callFunctionReturnFlushedQueu
                </Text>

                <View style={styles.loginMail}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput
                        name="email"
                        id="email"
                        onChangeText={(email) => this.setState({email})}
                        autoCapitalize='none'
                        autoCompleteType='email'
                        placeholder="Email                                                                                           ."
                        style={styles.inputField} />
                    
                    <Feather
                        name="check-circle"
                        color="#00716F"
                        size={23}
                    />
                </View>
                <View style={styles.loginPassword}>
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput 
                        name="password"
                        id="password"
                        onChangeText={(password) => this.setState({password})}
                        autoCompleteType='password'
                        secureTextEntry
                        placeholder="Password                                       ."
                        style={styles.inputField} />
                    
                    <Feather
                        name="eye-off"
                        color="#00716F"
                        size={23}
                    />
                </View>

                <View style={styles.buttonStyle}>
                    <Text
                        onPress={() => this.loginUser() } 
                        style={styles.buttonText}>Sign In</Text>
                </View>
                
                <Text 
                onPress={()=>navigate('Register')}
                style={styles.newUser}>Not a member? Sign Up</Text>

            </View>
            
        )
    }
}


const styles = StyleSheet.create({

    container:{
        backgroundColor : "#ffffff",
        height:"100%",
    },
    LoginPage:{
        fontSize:38,
        fontFamily:'SemiBold',
        alignSelf:"center"
    },
    abc:{
        marginHorizontal : 55 ,
        fontFamily: 'SemiBold',
        textAlign:"center",
        marginTop:5,
        opacity:0.4,
    },
    loginMail:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:55,
        borderWidth:2,
        marginTop:50,
        paddingHorizontal:10,
        borderColor:"#00716F",
        borderRadius:23,
        paddingVertical:2,
    },
    inputField:{
        paddingHorizontal:10,
    },
    loginPassword:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:55,
        borderWidth:2,
        marginTop:20,
        paddingHorizontal:10,
        borderColor:"#00716F",
        borderRadius:23,
        paddingVertical:2,
    },
    buttonStyle:{
        marginHorizontal:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        backgroundColor:"#00716F",
        paddingVertical:10,
        borderRadius:23,
    },
    buttonText:{
        color:"white",
        fontFamily:"SemiBold",
        alignSelf:"center",
    },
    newUser:{
        color:"white",
        fontFamily:"SemiBold",
        alignSelf:"center",
        paddingVertical:50,
    }
});