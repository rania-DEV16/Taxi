import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
 

const { width } =Dimensions.get("window");
const Block = ({ children }) =>{
const {container}=styles;
    return(<View style={container}>{children}</View>);
};



const styles = StyleSheet.create({
 container: {
  width:(width*4)/3,
     flexGrow:4,
     borderBottomLeftRadius: width,
     borderBottomRightRadius: width,
     justifyContent: "center",
     alignItems:"center",
     backgroundColor:"#2dbb54"
     
 }

});
export default Block;