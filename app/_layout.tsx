import React from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import QuestionPage from "./QuestionPage";
import MapPage from "./MapPage";
import ProfilePage from "./ProfilePage";
import ReminderPage from "./ReminderPage";
import PaymentPage from "./PaymentPage"
import ChangePage from "./ChangePage";
import HistoryPage from "./HistoryPage";
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

function reminderPage(){
  return (
    <ReminderPage/>
  );
}

function historyPage(){
  return(
    <HistoryPage/>
  );
}

function questionPage(){
  return (
    <QuestionPage/>
  );
}

function mapPage(){
  return(
    <MapPage/>
  );
}

function profilePage(){
  return(
    <ProfilePage/>
  );
}

function paymentPage(){
  return(
    <PaymentPage/>
  );
}

function changePage(){
  return(
    <ChangePage/>
  );
}

export default function App() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={loginPage}/>
      <Stack.Screen name="HomePage" component={homePage}/>
      <Stack.Screen name="ReminderPage" component={reminderPage}/>
      <Stack.Screen name="HistoryPage" component={historyPage}/>
      <Stack.Screen  name="QuestionPage" component={questionPage}/>
      <Stack.Screen name="MapPage" component={mapPage}/>
      <Stack.Screen name="ProfilePage" component={profilePage}/>
      <Stack.Screen name="PaymentPage" component={paymentPage}/>
      <Stack.Screen name="ChangePage" component={changePage}/>
    </Stack.Navigator>
  );

}

