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
  AttractionScreen: undefined,
  SuggestedScreen: undefined,
  ItineraryScreen: undefined,
  NestedScreens: undefined,
}

type calendarProps = NativeStackScreenProps<RootStackParamList, "CalendarPage">;
type timeProps = NativeStackScreenProps<RootStackParamList, "TimeScreen">;
type planProps = NativeStackScreenProps<RootStackParamList, "PlanScreen">;
type foodProps = NativeStackScreenProps<RootStackParamList, "FoodScreen">;
type ageProps = NativeStackScreenProps<RootStackParamList, "AgeScreen">;
type disabilityProps = NativeStackScreenProps<RootStackParamList, "DisabilityScreen">;
type rideProps = NativeStackScreenProps<RootStackParamList, "RideScreen">;
type attractionProps = NativeStackScreenProps<RootStackParamList, "AttractionScreen">;
type suggestedProps = NativeStackScreenProps<RootStackParamList, "SuggestedScreen">;
type itineraryProps = NativeStackScreenProps<RootStackParamList, "ItineraryScreen">;

function CalendarPage({navigation}: calendarProps) {
      const router = useRouter();
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
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
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
         <Icon name="home" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton}>
         <Icon name="assignment" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
         <Icon name="place" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
         <Icon name="account-circle" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
     </View>
    </View>  
  );
}

function TimeScreen({navigation}: timeProps) {
      const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("CalendarPage")}>
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
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
         <Icon name="home" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton}>
         <Icon name="assignment" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
         <Icon name="place" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
         <Icon name="account-circle" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
     </View>

    </View>
  );
}

function PlanScreen({navigation}: planProps) {
      const router = useRouter();
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("TimeScreen")}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity> 
        <Text style={styles.headerText}>Plan My Day</Text> 
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>Select one option:</Text>
        <TouchableOpacity style={styles.selectionButton} onPress={() => navigation.navigate("FoodScreen")}>
          <Text style={styles.selectionButtonText}>Create my customizable Itinerary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton} onPress={() => navigation.navigate("SuggestedScreen")}>
          <Text style={styles.selectionButtonText}>Suggest a Plan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("FoodScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
         <Icon name="home" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton}>
         <Icon name="assignment" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
         <Icon name="place" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
         <Icon name="account-circle" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
     </View>

    </View>
  );
}

function FoodScreen({navigation}: foodProps) {
      const router = useRouter();
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("PlanScreen")}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>What time do you plan on eating?</Text>
        <Text>Breakfast:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
        <Text>Lunch:</Text>
        <TextInput placeholder="Enter Time" style={styles.inputBox}/>
      </View>
      <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("AgeScreen")}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("AgeScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
         <Icon name="home" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton}>
         <Icon name="assignment" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
         <Icon name="place" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
         <Icon name="account-circle" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
     </View>

    </View>
  );
}

function AgeScreen({navigation}: ageProps) {
      const router = useRouter();
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} onPress={() => navigation.navigate("FoodScreen")}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
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
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("DisabilityScreen")}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("DisabilityScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
         <Icon name="home" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton}>
         <Icon name="assignment" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
         <Icon name="place" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
         <Icon name="account-circle" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
     </View>

    </View>
  );
}

function DisabilityScreen({navigation}: disabilityProps) {
      const router = useRouter();
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("AgeScreen")}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
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
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("RideScreen")}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("RideScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
         <Icon name="home" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton}>
         <Icon name="assignment" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
         <Icon name="place" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
         <Icon name="account-circle" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
     </View>

    </View>
  );
}

function RideScreen({navigation}: rideProps) {
      const router = useRouter();
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} onPress={() => navigation.navigate("DisabilityScreen")}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
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
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("AttractionScreen")}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("AttractionScreen")}>
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
         <Icon name="home" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton}>
         <Icon name="assignment" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
         <Icon name="place" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
         <Icon name="account-circle" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
     </View>

    </View>
  );
}

function AttractionScreen({navigation}: attractionProps){
      const router = useRouter();
  return (
    <View style={styles.container}>
      
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("RideScreen")}>
          <Icon name="arrow-back" style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.ridemiddleSection}>
        <Text style={styles.questionText}>Choose your must-go thrill rides:</Text>
        
        <View style={styles.optionContainer}>
          <Image source={require("../image/IronGwazi.png")} style={styles.rideImage} />
          <View style={styles.rideTextContainer}>
            <Text style={styles.selectionButtonText}>Iron Gwazi</Text>
            <Text style={styles.rideDescription}>Plunging riders from a 206 foot-tall peak into a 91-degree drop and reaching top speeds of 76 miles per hour.</Text>
          </View>
        </View>

        <View style={styles.optionContainer}>
          <Image source={require("../image/Sheikra.png")} style={styles.rideImage} />
          <View style={styles.rideTextContainer}>
            <Text style={styles.selectionButtonText}>Sheikra</Text>
            <Text style={styles.rideDescription}>200 ft from the sky, 90° straight down - ride this extreme roller coaster if you dare.</Text>
          </View>
        </View>

        <View style={styles.optionContainer}>
          <Image source={require("../image/Tigris.png")} style={styles.rideImage} />
          <View style={styles.rideTextContainer}>
            <Text style={styles.selectionButtonText}>Tigris</Text>
            <Text style={styles.rideDescription}>Catapult through an exhilarating array of looping twists with forward and backward motion and breath-taking drops.</Text>
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("ItineraryScreen")}>
          <Text style={styles.skipButtonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("ItineraryScreen")}>
          <Text style={styles.primaryButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
          <Icon name="account-circle" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SuggestedScreen({navigation}: suggestedProps){
  const router = useRouter();
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} onPress={() => navigation.navigate("PlanScreen")}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Awesome! Here is the suggested plan</Text>
        </View>

        <View style={styles.middleSection}>
        <View>
          <Text>Cheetah Hunt</Text>
          <Text>Arrive by 9:30AM</Text>
        </View>
        <View>
          <Text>Kumba</Text>
          <Text>Arrive by 10:00AM</Text>
        </View>
        <View>
          <Text>Cobra's Curse</Text>
          <Text>Arrive by 10:30AM</Text>
        </View>
      </View>

      <View style={styles.navbar}>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
         <Icon name="home" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton}>
         <Icon name="assignment" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
         <Icon name="place" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
         <Icon name="account-circle" color="#C8A6FF" size={30}/>
       </TouchableOpacity>
     </View> 

    </View>
  );
}

function ItineraryScreen({navigation}: itineraryProps){
    const router = useRouter();
  return(
    <View style={styles.container}>
      
      {/* Top Section */}
      <View style={styles.itintopSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.itinheaderText}>Awesome! Here is your itinerary</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.itinmiddleSection}>
        {[ 
          { image: require("../image/CheetaHunt.png"), name: "Cheetah Hunt", arrival: "9:30AM" },
          { image: require("../image/Kumba.png"), name: "Kumba", arrival: "10:00AM" },
          { image: require("../image/CobraCurse.png"), name: "Cobra’s Curse", arrival: "10:30AM" },
          { image: require("../image/Phoenix.png"), name: "Phoenix Rising", arrival: "11:00AM" }
        ].map((ride, index) => (
          <View key={index} style={styles.itineraryContainer}>
            <Image source={ride.image} style={styles.itineraryImage} />
            <View style={styles.itinTextContainer}>
              <Text style={styles.itinselectionButtonText}>{ride.name}</Text>
              <Text style={styles.itinrideDescription}>Arrive by {ride.arrival}</Text>
              <TouchableOpacity style={styles.directionsButton}>
                <Text style={styles.directionsButtonText} numberOfLines={1} adjustsFontSizeToFit>Get Directions</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Icon name="delete" style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
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
      <NestedStack.Screen name="AttractionScreen" component={AttractionScreen}/>
      <NestedStack.Screen name="SuggestedScreen" component={SuggestedScreen}/>
      <NestedStack.Screen name="ItineraryScreen" component={ItineraryScreen}/>
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
  ridemiddleSection: {
    width: "90%",
    backgroundColor: "#FCFAFF",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#C8A6FF",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  optionContainer: {
    width: "100%", 
    flexDirection: "row", 
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#8E7EFE",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rideImage: {
    width: 100, 
    height: 80, 
    borderRadius: 8,
    resizeMode: "cover",
  },
  rideTextContainer: {
    flex: 1, 
    paddingLeft: 15, 
    justifyContent: "center",
  },
  rideselectionButtonText: {
    fontSize: 16, 
    fontFamily: "Montserrat-Bold",
    color: "#000",
  },
  rideDescription: {
    fontSize: 12, 
    color: "#666",
    flexShrink: 1, 
  },
  itintopSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  itinmiddleSection: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FCFAFF",
    padding: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#C8A6FF",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    alignSelf: "center",
    paddingTop: 10,
    marginTop: 30,
},
  itinheaderText: {
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    color: "#310082",
    textAlign: "center",
    flexShrink: 1,
    marginLeft: 10, // Prevents overlap with back button
  },
  itineraryContainer: {
    width: "100%", 
    flexDirection: "row", 
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 17,
    alignItems: "center",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#C8A6FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itineraryImage: {
    width: 80, 
    height: 80, 
    borderRadius: 50,
    resizeMode: "cover",
  },
  itinTextContainer: {
    flex: 1, 
    paddingLeft: 15, 
    justifyContent: "center",
  },
  itinselectionButtonText: {
    fontSize: 16, 
    fontFamily: "Montserrat-Bold",
    color: "#000",
  },
  itinrideDescription: {
    fontSize: 14, 
    color: "#666",
    marginVertical: 5,
  },
  directionsButton: {
    backgroundColor: "#8E7EFE",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: "center",
    minWidth: 130, // Ensure enough width for text
  },
  directionsButtonText: {
    fontSize: 13,
    fontFamily: "Montserrat-Bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  deleteIcon: {
    fontSize: 24,
    color: "#6C4AB6",
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

