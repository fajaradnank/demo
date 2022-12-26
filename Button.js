import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from "react-native"
import Colors from "../Constants/Colors"
const Button = props => {
    return(
        <TouchableOpacity onPress={props.onPress }style ={Styles.Cont}>
             <Text style={Styles.btnTitle}>
                {props.btnTitle}
            </Text>
        </TouchableOpacity>
    )
}
const Styles=StyleSheet.create({
Cont:{
    height:"10%",
    width:"60%", 
    backgroundColor:Colors.btnColor, 
    flexDirection:"row", 
    marginTop: 25, 
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
},
btnTitle:{
    fontSize:16,
    fontWeight:"bold",
    color:"black",
    justifyContent: 'center',
    alignItems: 'center'
}
})
export default Button