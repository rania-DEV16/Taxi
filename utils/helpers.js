import { Platform } from "react-native";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const prefix=Platform.OS =="ios" ? "ios" : "md" ;

const config = {
    iosClientId: `601261541363-72uvbn9vmg1c3fbfisq177nnc07evo4r.apps.googleusercontent.com`,
    iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
  
  };


  export const auth = async () =>{
      try{
          const result =await Google.logInAsync(config);
           
      }catch(e){
          console.error("error auth",e)
      }
  }

  export const renderInitialScreen =async () =>{
      try{
          const user =await AsyncStorage.getItem("user");
          JSON.parse(user);
          return user ? "Home" : "Login";
      }catch(e){
          console.error("error render initial screen", e);
      }
  };