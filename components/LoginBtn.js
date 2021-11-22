
import React from "react";
import { TouchableOpacity,View,Image,Text,StyleSheet ,Dimensions} from "react-native";
import logo from ".././assets/images/google.png";
import Title from "./Title";
const { width }=Dimensions.get("window");
const LoginBtn = ({onPress})=>{
    const {logo ,container }=styles;
    return(
    
            <TouchableOpacity onPress={onPress}>
                <View style={container}>
                <Title size="small" content="Google connexion" />
                <Image style={logo} source={logo} />
                </View>
            </TouchableOpacity>
          
        
    );
};

const styles=StyleSheet.create({
logo:{
    width:40,
    height:40
},
container:{
    width:width-100,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    height:60,
    shadowColor:"#000",
    textShadowOffset:{ width: 0,height:1 },
    shadowOpacity:0.25,
    textShadowRadius:1.84,
    elevation:2,
    backgroundColor:"#fff",
    borderRadius:5,
    marginBottom:150


}
});
export default LoginBtn;