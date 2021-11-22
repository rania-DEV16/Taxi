import React,{useEffect,useState} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import * as Font from 'expo-font';
import HomeScreen from './components/HomeScreen';
import { renderInitialScreen } from './utils/helpers';
import { Permission } from 'react-native';
import PassagerScreen from './components/PassagerScreen';

const { Screen ,Navigator}=createNativeStackNavigator();

export default function App() {
  const [loading,setLoding] = useState(true);
  const [initialScreen,setinItialScreen] = useState("Login");
  const loadRessources = async()=>{
    try{
      const result = await new Promise.all([
        Font.loadAsync({
          Poppins:require("./assets/fonts/Poppins-Regular.ttf"),
          LeckerliOne: require("./assets/fonts/LeckerliOne-Regular.ttf")
        }),
        renderInitialScreen(),
      //  Permissions.askAsync(Permissions.LOCATION)
      ]);
    //  const route =result[1];
    //  const status = result[2].status;
     // if (rout && status === "granted"){
        setinItialScreen()
        setLoding(false);
      
     
     

  }catch(e){
    console.log("error loading ressource");
  }
};
useEffect(() =>{
  loadRessources();
}, []);
if (loading){
  return(
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

  return (
    <NavigationContainer>
      <Navigator initialRouteName={initialScreen} screenOptions={{headerShown:false}}>
        <Screen name="login" component={LoginScreen} />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Passanger" component={PassagerScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
