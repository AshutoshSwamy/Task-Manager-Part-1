import {React, Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Header} from 'react-native-elements';

export default class LoginScreen extends Component{

 constructor(){
  super();
  this.state = {
   email : "",
   password : ""
  }
 }

 render(){
  return(
   <View>
    <Text>Welcome To Task Manager</Text>
   </View>
  )
 }
}