import React from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import Button from "../Components/Button"
import Colors from "../Constants/Colors"

const Login = (props) => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    return (
        <SafeAreaView style= {{height:"100%", width:"100%",backgroundColor: Colors.bgColor}}>
            
        <View style={{height:"15%", width:"37%", justifyContent: "flex-end", alignItems:"center"}}> 
            <Text style={{fontSize:25, fontWeight:"bold", color: Colors.wmText}}>
                Welcome!
            </Text>
            </View>
            <View style={{height:"5%", width:"42%", justifyContent: "flex-start", alignItems:"center", marginBottom:20}}>
            <Text style={{fontSize:15, fontWeight:"400", color: Colors.wmText}}>
                Sign in to continue
            </Text>
            </View>
            <View style={{flex: 1, alignItems:"center"}}>
            <View style={{height:"15%", width:"90%", backgroundColor:Colors.cntColor, flexDirection: "row", borderRadius:20, marginBottom:10}}>
            <TextInput style={{fontSize:14, color:"black",fontWeight:"500",width:"70%",paddingLeft:20}}
             onChangeText={onChangeEmail}
             value={email}
             placeholder="Enter your email address"
             autoCorrect={false}
            />
            </View>
            <View style={{height:"15%", width:"90%", backgroundColor:Colors.cntColor, flexDirection: "row",marginTop: 20, borderRadius:20}}>
            <TextInput style={{fontSize:14, color:"black",fontWeight:"500",width:"70%",paddingLeft:20}}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry
            placeholder="Enter your password"
            />
            </View>
            <Button onPress={()=> props.navigation.navigate('Home')} btnTitle="Login"/>
            <Text onPress={()=> props.navigation.navigate('Signup')} style={{marginTop:20,fontSize:14, fontWeight:"900", color:Colors.wmText,height:"10%", width:"30%", justifyContent:"center", alignItems:"center"}}>
             Create an account
             </Text>
             </View>  
             </SafeAreaView>
    )
}
export default Login