import React from "react";
import { TouchableOpacity,View,StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';

const RoundBtn = ({ ionicons,onPress })=>{
    const {container, styleIcon}=styles;
return(
   
    <TouchableOpacity onPress={onPress}>
        <View style={container}>
            <Ionicons  style={styleIcon} name={ionicons} />
        </View>
    </TouchableOpacity>
);

};

const styles=StyleSheet.create({
 container:{
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:"#2dbb54",
     height:80,
     width:80,
     borderRadius:40

 },
 styleIcon:{
     fontSize:45,
     color:"#fff"
 }
});
export default RoundBtn;