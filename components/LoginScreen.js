import React from "react";
import { StyleSheet,Text, View,Dimensions } from "react-native";
import { auth, prefix } from "../utils/helpers";
import { Constants } from "expo-constants";
import Block from "./Block";
import Title from "./Title";
import {Ionicons} from '@expo/vector-icons';
import LoginBtn from "./LoginBtn";
const { width }=Dimensions.get("window");
const LoginScreen = (props)=> {
    const {container ,icon,container_2,titlecontainer }=styles;
     const handleLogin = ()=>{
         auth();
         props.navigation.push('Home');
     }
    return(
        <View style={container}>
            <Block>
                <Ionicons style={icon} name={`${prefix}-car`}/>
                <Title content="TAXI APP" size="big"/>
            </Block>
    
                <View style={container_2}> 
                    <View style={titlecontainer}>
                    <Title content="Authentification" size="small"/>
                    <Title content="connexion Google" size="medum"/>
                    </View>

                </View>
                <LoginBtn onPress={handleLogin} />
        </View>
      
        
    );

};
const styles=StyleSheet.create({
   container: {
    flex:1,
    marginTop:40,
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"#fff"
},
icon:{
    fontSize:80,
    color:"#fff"
},
container_2:{
    flexGrow:1,
    justifyContent:"center",
    alignItems:"center"

},
titlecontainer:{
    width:width-80,
    height:50,
    justifyContent:"center",
    alignItems:"flex-start"
}
   
    
});

export default LoginScreen;


