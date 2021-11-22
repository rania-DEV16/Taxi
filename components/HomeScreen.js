import React,{useEffect,useState} from "react";
import { StyleSheet,Text, View,Dimensions } from "react-native";
import { auth, prefix } from "../utils/helpers";
import { Constants } from "expo-constants";
import Block from "./Block";
import Title from "./Title";
import {Ionicons} from '@expo/vector-icons';
import RoundBtn from "./RoundBtn";
import * as Location from "expo-location"
const { width }=Dimensions.get("window");
const HomeScreen = (props)=> {


    const initiaState = { laltitude : null, longitude : null } ;
    const [state, setState]= useState(initiaState);
    const {container ,icon,container_2,titlecontainer ,RoundBtnContainer}=styles;
    
    const getUserLocation = async () => {
        try{
            const location= await Location.getForegroundPermissionsAsync();
            console.log('location',location);
        } catch(e){
            console.error('error ',e);
        } 
        };
     
    
    const handleLogin = ()=>{
         auth();
         props.navigation.push('Home');
     }
     const goTo=route=>props.navigation.push(route);
     

     useEffect(() => {
        getUserLocation();
         }, []);
          return(
            <View style={container}>
            <Block>
                <Ionicons style={icon} name={`${prefix}-car`}/>
                <Title content="TAXI APP" size="big"/>
            </Block>
    
                <View style={container_2}> 
                    <View style={titlecontainer}>
                    <Title content="Bienvenue" size="small"/>
                    <Title content="vous rechercher un" size="medum"/>
                    </View>
                   <View style={RoundBtnContainer}>
                   <RoundBtn ionicons={`${prefix}-car`} onPress={()=> goTo("Passanger")}/>
                    <RoundBtn  ionicons={`${prefix}-person`}/>
                   </View>

                </View>
            
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
    width:width-170,
    height:50,
    justifyContent:"center",
    alignItems:"center"
},
RoundBtnContainer:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    width:width-80,
    marginTop:20

}
   
    
});

export default HomeScreen;


