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

function CalendarPage({ navigation }) {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow_back" style={styles.backIcon} />
      </TouchableOpacity>      
      <Text style={styles.headerText}>Plan My Day</Text>
      <Text style={styles.questionText}>Select the day(s) you will spend at the park:</Text>
      <Calendar style={styles.calendar}/>
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("TimeScreen")}>
        <Text style={styles.primaryButtonText}>Next</Text>
      </TouchableOpacity>
    </View>  
  );
}

function TimeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow_back" style={styles.backIcon} />
        </TouchableOpacity> 
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>At what time do you plan to arrive and leave the park?</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.label}>Arriving:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
        <Text style={styles.label}>Leaving:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("PlanScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
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

function PlanScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow_back" style={styles.backIcon} />
        </TouchableOpacity> 
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>Select one option:</Text>
      </View>
      <View style={styles.middleSection}>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Create my customizable Itinerary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Suggest a Plan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("FoodScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
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

function FoodScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow_back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>What time do you plan on eating?</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.label}>Breakfast:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
        <Text style={styles.label}>Lunch:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate("AgeScreen")}>
          <Text style={styles.secondaryButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("AgeScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
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

function AgeScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow_back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>Select your age group:</Text>
      </View>
      <View style={styles.middleSection}>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Preschoolers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Children</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Teenagers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Adults</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>All Ages</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("DisabilityScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
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

function DisabilityScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow_back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>Accessibility options:</Text>
      </View>
      <View style={styles.middleSection}>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Remain in Wheelchair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Include Shuttles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Service Animals</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("RideScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
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

function RideScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow_back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Plan My Day</Text>
        <Text style={styles.questionText}>Choose your ride preferences:</Text>
      </View>
      <View style={styles.middleSection}>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Thrill Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Slow Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Water Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Animal Experiences</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Finish</Text>
        </TouchableOpacity>
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
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 20,
  },
  middleSection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  bottomSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 32,
    fontFamily: "Montserrat-Bold",
    color: "#310082",
    textAlign: "center",
  },
  questionText: {
    fontSize: 18,
    fontFamily: "Atkinson Hyperlegible",
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 10,
  },
  inputBox: {
    width: 300,
    height: 60,
    backgroundColor: "#E4D7FF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#310082",
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: "Atkinson Hyperlegible",
    textAlign: "center",
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: "#310082",
    borderRadius: 10,
    height: 50,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  primaryButtonText: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "#FFFFFF",
  },
  selectionButton: {
    backgroundColor: "#E4D7FF",
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: "#310082",
    marginVertical: 5,
    alignItems: "center",
  },
  selectionButtonText: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "#310082",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 40,
  },
  backIcon: {
    color: "#310082",
    fontSize: 30,
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
