//import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
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

function CalendarPage({navigation}: calendarProps) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Plan My Day</Text>
      </View> 
      <View style={styles.CalendarmiddleSection}>
      <Text style={styles.questionText}>Select the day(s) you will spend at the park:</Text>
      <Calendar/>
      </View> 
      <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("TimeScreen")}>
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

function TimeScreen({navigation}: timeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity> 
        <Text style={styles.headerText}>Plan My Day</Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>At what time do you plan to arrive and leave the park?</Text>
        <Text>Arriving:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
        <Text>Leaving:</Text>
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

function PlanScreen({navigation}: planProps) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity> 
        <Text style={styles.headerText}>Plan My Day</Text> 
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>Select one option:</Text>
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

function FoodScreen({navigation}: foodProps) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Plan My Day</Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>What time do you plan on eating?</Text>
        <Text>Breakfast:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
        <Text>Lunch:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
      </View>
      <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
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

function AgeScreen({navigation}: ageProps) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Plan My Day</Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>Select your age group:</Text>
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
      <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
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

function DisabilityScreen({navigation}: disabilityProps) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Plan My Day</Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>Accessibility options:</Text>
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
      <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
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

function RideScreen({navigation}: rideProps) {
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Plan My Day</Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>Choose your ride preferences:</Text>
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
      <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingBottom: 20, // Ensure space above navbar
  },
  topSection: {
    width: "100%",
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  middleSection: {
    flex: 1,
    width: "90%",
    backgroundColor: "#FCFAFF",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#C8A6FF",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    alignSelf: "center",
    paddingTop: 10,
  },
  CalendarmiddleSection: {
    flex: 1,
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    alignSelf: "center",
    paddingTop: 10,
  },
  optionBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#C8A6FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bottomSection: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 70, // Keep above navbar
  },
  headerText: {
    fontSize: 24,
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
    width: "100%",
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#C8A6FF",
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: "Atkinson Hyperlegible",
    textAlign: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: "#310082",
    borderRadius: 10,
    height: 40,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "#FFFFFF",
  },
  selectionButton: {
    backgroundColor: "#FCFAFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 15,
    borderWidth: 1,
    borderColor: "#8E7EFE",
    marginVertical: 5,
    alignItems: "center",
  },
  selectionButtonText: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "#000000",
  },
  skipButton: {
    backgroundColor: "#C8A6FF",
    borderRadius: 10,
    height: 40,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  skipButtonText: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "#FFFFFF",
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

