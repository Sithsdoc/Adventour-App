//import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View, Button, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { FlatList } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useRouter } from "expo-router";
//import { CheckBox, Input } from "@rneui/themed";
//import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainStack =  createNativeStackNavigator<RootStackParamList>();
const NestedStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList ={
  CalendarPage: undefined,
  TimeScreen: undefined, 
  PlanScreen: undefined,
  FoodScreen: undefined,
  AgeScreen: undefined,
  DisabilityScreen: undefined,
  RideScreen: undefined,
  NestedScreens: undefined,
}

type calendarProps = NativeStackScreenProps<RootStackParamList, "CalendarPage">;
type timeProps = NativeStackScreenProps<RootStackParamList, "TimeScreen">;
type planProps = NativeStackScreenProps<RootStackParamList, "PlanScreen">;
type foodProps = NativeStackScreenProps<RootStackParamList, "FoodScreen">;
type ageProps = NativeStackScreenProps<RootStackParamList, "AgeScreen">;
type disabilityProps = NativeStackScreenProps<RootStackParamList, "DisabilityScreen">;
type rideProps = NativeStackScreenProps<RootStackParamList, "RideScreen">;

function CalendarPage({navigation}: calendarProps){
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>Plan My Day</Text>
      <Text style={styles.questionText}>Select the day(s) you will spend at the park:</Text>
      <Calendar/>
      <Button title="Next" onPress={() => navigation.navigate("TimeScreen")}/>
    </View>  
  );
}

function TimeScreen({navigation}: timeProps){
  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>At what time do you plan to arrive <br/>and leave the park?</Text>
      </View>
      <View style={styles.middleSection}>
        <Text>Arriving:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
        <Text>Leaving:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
      </View>
      <View style={styles.bottomSection}>
        <Button color="#310082" title="Next" onPress={() => navigation.navigate("PlanScreen")}/>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-circle" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function PlanScreen({navigation}: planProps){
  return(
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>Select one option:</Text>
      </View>

      <View style={styles.middleSection}>
        <TouchableOpacity>
          <Text>Create my customizable Itinerary</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Suggestable Plan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSection}>
        <Button title="Next" onPress={() => navigation.navigate("FoodScreen")}/>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-circle" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
      </View>      

    </View>
  );
}

function FoodScreen({navigation}: foodProps){
  return(
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>What time do you plan on eating?</Text>
      </View>

      <View style={styles.middleSection}>
        <Text>Breakfast:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
        <Text>Lunch:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
      </View>

      <View style={styles.bottomSection}>
        <Button title="Skip" onPress={() => navigation.navigate("AgeScreen")}/>
        <Button title="Next" onPress={() => navigation.navigate("AgeScreen")}/>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-circle" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function AgeScreen({navigation}: ageProps){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>Age:</Text>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Preschoolers</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Children</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Teenagers</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Adults</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>All ages</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Button title="Skip" onPress={() => navigation.navigate("DisabilityScreen")}/>        
        <Button title="Next" onPress={() => navigation.navigate("DisabilityScreen")}/>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-circle" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
      </View>      

    </View>
  );
}

function DisabilityScreen({navigation}: disabilityProps){
  return(
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>Accesibility</Text>
      </View>

      <View style={styles.middleSection}>
        <TouchableOpacity>
          <Text>Remain in wheelchair</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Include shuttles</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Service animals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSection}>
        <Button title="Next" onPress={() => navigation.navigate("RideScreen")}/>
        <Button title="Skip" onPress={() => navigation.navigate("RideScreen")}/>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-circle" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
      </View> 

    </View>
  );
}

function RideScreen({navigation}: rideProps){
  return(
    <View style={styles.container}>

      <View>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>Choose your ride preferences:</Text>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Thrill rides</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Slow rides</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Water rides</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Animal experiences</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Button title="Skip" onPress={() => navigation.navigate("DisabilityScreen")}/>        
        <Button title="Next" onPress={() => navigation.navigate("DisabilityScreen")}/>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-circle" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
      </View> 

    </View>
  );
}

function NestedScreens(){
  return(
    <NestedStack.Navigator screenOptions={{ headerShown: false }}>
      <NestedStack.Screen name="CalendarPage" component={CalendarPage} />
      <NestedStack.Screen name="TimeScreen" component={TimeScreen}/>
      <NestedStack.Screen name="PlanScreen" component={PlanScreen}/>
      <NestedStack.Screen name="FoodScreen" component={FoodScreen}/>
      <NestedStack.Screen name="AgeScreen" component={AgeScreen}/>
      <NestedStack.Screen name="DisabilityScreen" component={DisabilityScreen}/>
      <NestedStack.Screen name="RideScreen" component={RideScreen}/>
    </NestedStack.Navigator>
  );
}

export default function QuestionPage() {
  const router = useRouter();

  return( 
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen
        name="NestedScreens"
        component={NestedScreens}
        />
      </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  //sections for the screen
  topSection: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  middleSection: {
    flex: 2, 
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  bottomSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40, 
  },
  //Text Css
  headerText: {
    fontSize: 40,
    color: "#310082",
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  //CSS for text input
  inputBox: {
    width: 274,
    height: 78,
    backgroundColor: "#C8A6FF",
  },
  //CSS for navbar 
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8E7EFE",
    height: 70,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  
});
