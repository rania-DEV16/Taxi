import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text,View } from "react-native";


const PassagerScreen =(props)=>{
    const {container} = styles;
    return(
        <View >
           <MapView
         style = {styles.map}
         showsUserLocation = {false}
         followUserLocation = {false}
         zoomEnabled = {true}
      />
        </View>
    );
};
const styles=StyleSheet.create({
 container:{
    flex:1,
    marginTop:40,
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"#fff"
},
map: {
    height: 800,
    marginTop: 80
 }
});
export default PassagerScreen;