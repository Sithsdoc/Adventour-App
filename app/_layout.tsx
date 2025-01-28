import React from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import QuestionPage from "./QuestionPage";
import ProfilePage from "./ProfilePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


function loginPage(){
  return (
    <LoginPage />
  );
}

function homePage(){
  return(
    <HomePage/>
  );
}

function questionPage(){
  return (
    <QuestionPage/>
  );
}

function profilePage(){
  return(
    <ProfilePage/>
  )
}

export default function App() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={loginPage}/>
      <Stack.Screen name="HomePage" component={homePage}/>
      <Stack.Screen  name="QuestionPage" component={questionPage}/>
      <Stack.Screen name="ProfilePage" component={profilePage}/>
    </Stack.Navigator>
  );

}

