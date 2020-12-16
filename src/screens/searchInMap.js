// import React from 'react';
// import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons';

// const WIDTH = Dimensions.get('window').WIDTH
// export const SearchLocationButton = function (porps) {

//     return (
//         <View>
//             <TouchableOpacity onPress={() => { }} style={styles.container} >
//                 <View >
//                     <Text style={{fontSize:8,}}> {'\u25A0'} </Text>
//                 </View>
//                 <View  >
//                     <Text style={{fontFamily:'sans-serif-thin', fontSize:21, color:'#545454'}} > Find Restaurents</Text>
//                 </View>
//                 <View  >
//                     {/* <Ionicons name='md-car' color='#000000' style={{ alignSelf:'center' }} /> */}
//                     <Icon name='utensils' style={{alignSelf:'center'}} />
//                 </View>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: { zIndex: 9, position: 'absolute', flexDirection: 'row', width: (WIDTH - 40), height: 60, top: 110, left: 20, borderRadius: 2, backgroundColor: 'white', alignItems: 'center', shadowColor : '#000000', elevation: 7, shadowRadius:5, shadowOpacity :1.0,  },
//     lefCol:{flex:1, alignItems:'center', },
//     centerCol:{ flex:4, },
//     rightCol:{flex:1, borderLeftWidth:1, borderColor:'#ededed',  },
// })