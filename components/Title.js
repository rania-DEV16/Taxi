import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title=({ content,size }) =>{
const { container ,title , small, medum }=styles;

const getTitleStyle=()=>{
 switch(size){
   case "big":
     return title;
     case "small":
       return small;
         case"medum":
        return medum;
 }
};

return(
    <View style={container}>
        <Text style={getTitleStyle()}>{content}</Text>
    </View>
);

};
const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"

    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        fontFamily: "LeckerliOne",
        },
        small:{
            fontSize:12,
            fontFamily:"Poppins",
            lineHeight:28,
            color:"rgba(0,0,0,0.6)"
        },
        medum:{
            fontFamily:"Poppins",
            fontSize:24,
            fontWeight: "bold",
            lineHeight:28
        }
});

export default Title;
 