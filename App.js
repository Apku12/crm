import React from 'react';
import { createAppContainer } from "react-navigation"                                                                                                                                                                                                                                                                                                                                                   
import { createStackNavigator } from "react-navigation-stack"
import Login from "./screens/Login"
import Home from "./screens/Home"
import CsrForm from "./screens/CsrForm"
import Profile from "./screens/Profile"
import Signs from "./screens/Sign"
import auth from "@react-native-firebase/auth"



const RootStack = createStackNavigator(
  {
    Home: Home,
    CsrForm: CsrForm,
    Signs: Signs,
    Profile: Profile,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#301f02"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }, 
  },
);

const RootContainer  = createAppContainer(RootStack);

export default function App(){

  if(auth().currentUser != null){
    return(
      <RootContainer />
    );
  }else{
    return(
      <Login/>
    );
  }
}