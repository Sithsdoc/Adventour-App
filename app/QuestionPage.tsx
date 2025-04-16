//import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useState, useEffect} from "react";
import { FlatList, StyleSheet, View, Button, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useRouter } from "expo-router";
import { supabase } from "../utils/supabase";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
//import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
//import { CheckBox, Input } from "@rneui/themed";
//import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const MainStack =  createNativeStackNavigator<RootStackParamList>();
const NestedStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList ={
  CalendarPage: undefined,
  TimeScreen: undefined, 
  PlanScreen: undefined,
  FoodScreen: undefined,
  HeightScreen: undefined,
  DisabilityScreen: undefined,
  RideScreen: undefined,
  AttractionScreen: undefined,
  SuggestedScreen: undefined,
  ItineraryScreen: undefined,
  ConfirmationScreen: undefined,
  NestedScreens: undefined,
}

type calendarProps = NativeStackScreenProps<RootStackParamList, "CalendarPage">;
type timeProps = NativeStackScreenProps<RootStackParamList, "TimeScreen">;
type planProps = NativeStackScreenProps<RootStackParamList, "PlanScreen">;
type foodProps = NativeStackScreenProps<RootStackParamList, "FoodScreen">;
type heightProps = NativeStackScreenProps<RootStackParamList, "HeightScreen">;
type disabilityProps = NativeStackScreenProps<RootStackParamList, "DisabilityScreen">;
type rideProps = NativeStackScreenProps<RootStackParamList, "RideScreen">;
type attractionProps = NativeStackScreenProps<RootStackParamList, "AttractionScreen">;
type suggestedProps = NativeStackScreenProps<RootStackParamList, "SuggestedScreen">;
type itineraryProps = NativeStackScreenProps<RootStackParamList, "ItineraryScreen">;
type confirmationProps = NativeStackScreenProps<RootStackParamList, "ConfirmationScreen">;

let userInput = [
["","",""], 
["","",""], 
["","",""], 
[""]];
//use .pop() to delete information from an array or delete word using "delete userInput[][]"
function CalendarPage({navigation}: calendarProps) {
      const router = useRouter();
      const [selectedDate, setSelectedDate] = useState<string| null>("");
      const [errorMessage, setErrorMessage] = useState("");
      

      const onDayPress = (day: { dateString: string }) => {
        //console.log(day);
        setSelectedDate(day.dateString);
        //console.log("Selected Date:", day.dateString);
      };

      const pushToArray = () => {
        if(selectedDate){
        userInput[0][0] = selectedDate;
        //console.log(userInput);
        navigation.navigate("TimeScreen");
        } else if(!selectedDate){
          setErrorMessage("Please pick a date");
        }
      }

      
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
      <Text style={styles.headerText}>Plan My Day</Text>
      </View> 
      <View style={styles.CalendarmiddleSection}>
      <Text style={styles.questionText}>Select the day(s) you will spend at the park:</Text>
      <Calendar onDayPress={onDayPress} markedDates={{[selectedDate || ""]: {selected: true, backgroundColor: "blue"}}}/>
      <Text>{errorMessage}</Text>
      </View> 
      <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.primaryButton} onPress={pushToArray}>
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
      const [arrivalInputTime, setArrivalInputTime] = useState("");
      const [leaveInputTime, setLeaveInputTime] = useState("");
      const [errorMessage, setErrorMessage] = useState("");

      const validateTimeExpressions = (time: string) => {
        const timePattern = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
        //const timePattern24 = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        return timePattern.test(time);
      }

      const handlesave = () => {
        if (validateTimeExpressions(arrivalInputTime) || validateTimeExpressions(leaveInputTime)){
        userInput[0][1] = arrivalInputTime;
        userInput[0][2] = leaveInputTime;
        //console.log(userInput);
        navigation.navigate("PlanScreen");
        } else {
          setErrorMessage("Please enter the time in the correct format");
        }
      }

      const handleDateDelete = () => {
        delete userInput[0][0];
        navigation.navigate("CalendarPage");
      }

  return (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={ {flex: 1} }>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleDateDelete}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity> 
        <Text style={styles.headerText}>Plan My Day</Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>At what time do you plan to arrive and leave the park?
        (Include spaces between time and AM/PM)
      </Text>
        <Text>Arriving:</Text>
        <TextInput placeholder="Enter Time (ex. 10:30 AM)" 
        value={arrivalInputTime}
        onChangeText={setArrivalInputTime} 
        style={styles.inputBox}/>
        <Text>Leaving:</Text>
        <TextInput placeholder="Enter Time (ex. 6:00 PM)"
        value={leaveInputTime}
        onChangeText={setLeaveInputTime}
         style={styles.inputBox}/>
         <Text>{errorMessage}</Text>
      </View>
      
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={handlesave}>
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
    </ScrollView>
  </KeyboardAvoidingView>
  );
}

function PlanScreen({navigation}: planProps) {
      const router = useRouter();

      const handleTimeDelete = () => {
        delete userInput[0][1];
        delete userInput[0][2];
        navigation.navigate("TimeScreen");
      }
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleTimeDelete}>
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
      const [breakfastTime, setBreakfastTime] = useState("");
      const [lunchTime, setLunchTime] = useState("");
      const [errorMessage, setErrorMessage] = useState("");

      const validateTimeExpressions = (time: string) => {
        const timePattern = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
        //const timePattern24 = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        return timePattern.test(time);
      }

      const saveFoodTime = () => {
        if (validateTimeExpressions(breakfastTime) || validateTimeExpressions(lunchTime)){
        userInput[1][0] = breakfastTime;
        userInput[1][1] = lunchTime;
        //console.log(userInput);
        navigation.navigate("HeightScreen");
        } else {
          setErrorMessage("Please enter the time in the correct format");
        }
      }

      const skipFoodTime = () => {
        userInput[1][0] = ("");
        userInput[1][1] = ("");
        //console.log(userInput);
        navigation.navigate("HeightScreen");
      }
  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={ {flex: 1} }>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
        <TextInput placeholder="Enter Time (ex. 10:30 AM)"
        value={breakfastTime} 
        onChangeText={setBreakfastTime}
        style={styles.inputBox}/>
        <Text>Lunch:</Text>
        <TextInput placeholder="Enter Time (ex. 6:00 PM)"
        value={lunchTime}
        onChangeText={setLunchTime}
         style={styles.inputBox}/>
         <Text>{errorMessage}</Text>
      </View>
      <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.skipButton} onPress={skipFoodTime}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={saveFoodTime}>
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
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

function HeightScreen({navigation}: heightProps) {
      const router = useRouter();
      const [userAnswer, setUserAnswer] = useState("");
      const [userHeight, setUserHeight] = useState("");
      const [errorMessage, setErrorMessage] = useState("");

      const validateHeightExpressions = (height: string) => {
        const heightPattern = /^\d{1,3}\s?(in|cm)$/i;
        return heightPattern.test(height);
      }

      const saveHeight = () => {
        if(validateHeightExpressions(userHeight)){
        userInput[1][2] = userHeight;
        //console.log(userInput);
        navigation.navigate("DisabilityScreen");
        } else {
          setErrorMessage("Please enter the height in the correct format");
        }
      }

      const skipHeight = () => {
        userInput[1][2] = ("");
        //console.log(userInput);
        navigation.navigate("DisabilityScreen");
      }

      const handleFoodDelete = () => {
        delete userInput[1][0];
        delete userInput[1][1];
        navigation.navigate("FoodScreen");
      }
  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={ {flex: 1} }>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} onPress={handleFoodDelete}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.questionText}>What is the minimum guest height in your group? (Enter their
          height in inches or centimeters):</Text>
        <TextInput placeholder="Enter height(in or cm)" 
        value={userHeight}
        onChangeText={setUserHeight}
        style={styles.inputBox}/>
        <Text>{errorMessage}</Text>
      </View>
      <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.skipButton} onPress={skipHeight}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={saveHeight}>
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
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

function DisabilityScreen({navigation}: disabilityProps) {
      const router = useRouter();
      const [userDisability, setUserDisability] = useState("");

      const answerSelection = (answer: string) => {
        setUserDisability(answer);
        //console.log(answer);
        userInput[2][0] = answer;
      }

      const handleAnswer = () => {
        //console.log(userInput);
        navigation.navigate("RideScreen");
      }

      const skipAnswer = () => {
        userInput[2][0] = ("");
        console.log(userInput);
        navigation.navigate("RideScreen");
      }

      const handleHeightDelete = () => {
        delete userInput[1][2];
        navigation.navigate("HeightScreen");
      }

  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleHeightDelete}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
      </View>
      <View style={styles.middleSection} >
      <Text style={styles.questionText}>Accessibility options:</Text>
        <TouchableOpacity style={[styles.selectionButton, {backgroundColor: userDisability === "Remain in Wheelchair" ? "#8E7EFE" : "#FCFAFF"}]} onPress={() => answerSelection("Remain in Wheelchair")}>
          <Text style={styles.selectionButtonText}>Remain in Wheelchair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectionButton, {backgroundColor: userDisability === "Include Shuttles" ? "#8E7EFE" : "#FCFAFF"}]} onPress={() => answerSelection("Include Shuttles")}>
          <Text style={styles.selectionButtonText}>Include Shuttles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectionButton, {backgroundColor: userDisability === "Service Animals" ? "#8E7EFE" : "#FCFAFF"}]} onPress={() => answerSelection("Service Animals")}>
          <Text style={styles.selectionButtonText}>Service Animals</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.skipButton} onPress={skipAnswer}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={handleAnswer}>
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
      const [rideChoice, setRideChoice] = useState("");

      const rideSelection = (ride: string) => {
        setRideChoice(ride);
        userInput[2][1] = ride;
      }

      const handleRide = () => {
        //console.log(userInput);
        navigation.navigate("AttractionScreen");
      }

      const skipRide = () => {
        userInput[2][1] = ("");
        //console.log(userInput);
        navigation.navigate("AttractionScreen");
      }

      const handleDisabilityDelete = () => {
        delete userInput[2][0];
        navigation.navigate("DisabilityScreen");
      }
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} onPress={handleDisabilityDelete}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.questionText}>Choose your ride preferences:</Text>
        <TouchableOpacity style={[styles.selectionButton, {backgroundColor: rideChoice === "Thrill Ride" ? "#8E7EFE" : "#FCFAFF"}]} onPress={() => rideSelection("Thrill Ride")}>
          <Text style={styles.selectionButtonText}>Thrill Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectionButton, {backgroundColor: rideChoice === "Shows & Entertainment" ? "#8E7EFE" : "#FCFAFF"}]} onPress={() => rideSelection("Shows & Entertainment")}>
          <Text style={styles.selectionButtonText}>Shows & Entertainment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectionButton, {backgroundColor: rideChoice === "Family Friendly" ? "#8E7EFE" : "#FCFAFF"}]} onPress={() => rideSelection("Family Friendly")}>
          <Text style={styles.selectionButtonText}>Family Friendly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectionButton, {backgroundColor: rideChoice === "Animal Encounter" ? "#8E7EFE" : "#FCFAFF"}]} onPress={() => rideSelection("Animal Encounter")}>
          <Text style={styles.selectionButtonText}>Animal Encounter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.skipButton} onPress={skipRide}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={handleRide}>
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
      const [data, setData] = useState<any[]>([]);
      const [rideChosen, setRideChosen] = useState("");
      const [loading, setLoading] = useState(true);
      let userSelection = userInput[2][1];

      const handleRide = (ride: any) => {
        setRideChosen(ride.ride_name);
        //console.log(ride.ride_name);
        userInput[2][2] = ride.ride_name;
      }

      const nextPage = () => {
        //console.log(userInput);
        navigation.navigate("ItineraryScreen");
      }

      const handleRideDelete = () => {
        delete userInput[2][1]
        navigation.navigate("RideScreen");
      }

      const fetchRideData = async () => {
        setLoading(true);
        
        const {data: parkInformation, error} = await supabase
        .from("park_information")
        .select("*")
        .eq("ride_type", userSelection)
        .limit(3);
      
        if (error){
          console.log(error.message);
        } else {
          setData(parkInformation);
        }
        setLoading(false);
      }
      
      useEffect(() => {
        fetchRideData();
      }, []);


  return (
    <View style={styles.container}>
      
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleRideDelete}>
          <Icon name="arrow-back" style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
      </View>

      <View style={styles.ridemiddleSection}>
        <Text style={styles.questionText}>Choose your must-do attractions:</Text>
        
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
        <View key={index} style={[styles.optionContainer, {backgroundColor: rideChosen === item.ride_name ? "#8E7EFE" : "#FCFAFF"}]}>
          <Image source={{uri: item.images}} style={styles.rideImage} />
          <TouchableOpacity onPress={() => handleRide(item)}>
            <View style={styles.rideTextContainer}>
              <Text style={styles.selectionButtonText}>{item.ride_name}</Text>
              <Text style={styles.rideDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        </View>
        )}/>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.skipButton} onPress={nextPage}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={nextPage}>
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

function SuggestedScreen({navigation}: suggestedProps){
  const router = useRouter();
  const [parkData, setParkData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [parkTime, setParkTime] = useState<string[]>([]);

  //code for saving values in loop
const fetchParkData = async () => {
  setLoading(true);
  
  const {data: selectedParkInformation, error} = await supabase
  .from("park_information")
  .select("*")
  .limit(rideInterval());

  if (error){
    console.log(error.message);
  } else {
    setParkData(selectedParkInformation);
  }
  setLoading(false);
}

useEffect(() => {
  fetchParkData();
}, []);
    /* based on research the best method would a foreach loop or .map operation through the arrays loop
    rides are saved to reorderedRides. Information needed start time (userInput[0][1]), leave time (userInput[0][2]), and date (userInput[0][0]). Information for table is the id and the table name from the database.
    Use the foreign key in the databse to connect park_information to the other rides */
const submitPlan = () => {
  const rideIds = reorderedRides.map(ride => ride.id);
  const rideTypes = reorderedRides.map(rides => rides.ride_type);
  const tableNames = reorderedRides.map(ride => {
  if (rideTypes.includes("Thrill Ride") || rideTypes.includes("Family Friendly")){
    return "Rides";
      } else if (rideTypes.includes("Shows & Entertainment")){
        return "Shows";
      }
    }
  )
  console.log(rideIds);
  router.push("/HomePage");
}

const rideInterval = () => {
  const chosenDate = userInput[0][0];
  //arrival time information
  const userArrivalTime = userInput[0][1];
  const parseUserArrivalTime = userArrivalTime.split(" ");
  const userArrivalTimeString = new Date(`${chosenDate} ${parseUserArrivalTime[0]}`);
  let userArrivalMinutes = userArrivalTimeString.getMinutes();
  let userArrivalHour = userArrivalTimeString.getHours();
  //leave time information 
  const userLeaveTime = userInput[0][2];
  const parseUserLeaveTime = userLeaveTime.split(" ");
  const userLeaveTimeString = new Date(`${chosenDate} ${parseUserLeaveTime[0]}`);
  let userLeaveMinutes = userLeaveTimeString.getMinutes();
  let userLeaveHour = userLeaveTimeString.getHours();
  //loop to get incremented minutes
  if (parseUserArrivalTime[1].toLowerCase() == "pm"){
    userArrivalHour += 12;
  }
  if (parseUserLeaveTime[1].toLowerCase() == "pm"){
    userLeaveHour += 12;
  }
  let leavePickedHour = userLeaveHour;
  let leavePickedMinutes = userLeaveMinutes - 45;
  if (leavePickedMinutes < 0){
    leavePickedHour -= 1;
    leavePickedMinutes += 60;
  }
  //let leaveUserTime = (`${leaveUserHour}:${leaveUserMinutes}`);

  const userSchedule = [];
  while(
    userArrivalHour < leavePickedHour || 
    (userArrivalHour === leavePickedHour && userArrivalMinutes < leavePickedMinutes)
  ){
    userArrivalMinutes += 45;
    if (userArrivalMinutes >= 60){
      userArrivalHour += Math.floor(userArrivalMinutes / 60);
       userArrivalMinutes = userArrivalMinutes % 60;
    }
    let displayHour = userArrivalHour;
    var suffix = userArrivalHour < 12 ? "AM":"PM";
    if (displayHour > 12 ){
      displayHour -= 12;
    } 
    let iteration = (`${displayHour}:${userArrivalMinutes.toString().padStart(2, "0")} ${suffix}`);
    userSchedule.push(iteration);
    setParkTime(lastTime => [...lastTime, iteration]);
  }
  //console.log("Schedule is:", userSchedule);
    return (userSchedule.length);
}
const chosenRide = userInput[2][2];
//console.log("Chosen ride:", chosenRide);
//console.log("All ride names:", data.map(d => d.ride_name));
const reorderedRides = [
  ...parkData.filter(item=> item.ride_name === chosenRide),
  ...parkData.filter(item => item.ride_name !== chosenRide)
];
console.log(reorderedRides);
  return(
    <View style={styles.container}>
      
    <View style={styles.itintopSection}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" style={styles.backIcon}/>
      </TouchableOpacity>
      <Text style={styles.suggestheaderText}>Awesome! Here is the suggested plan</Text>
    </View>

    <View style={styles.itinmiddleSection}>
      { loading ? ( 
        <ActivityIndicator />
      ) : (
        <FlatList 
        data={reorderedRides}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
         <View key={index} style={styles.itineraryContainer}>
              <Image source={{uri: item.images}} style={styles.itineraryImage} />
            <View style={styles.itinTextContainer}>
              <Text style={styles.itinselectionButtonText}>{item.ride_name}</Text>
              <Text style={styles.itinrideDescription}>Arrive by {parkTime[index]}</Text>
              {/*<TouchableOpacity style={styles.directionsButton}>
                <Text style={styles.directionsButtonText} numberOfLines={1} adjustsFontSizeToFit>Get Directions</Text>
              </TouchableOpacity>*/}
            </View>
            <TouchableOpacity>
              <Icon name="delete" style={styles.deleteIcon} />
            </TouchableOpacity>
        </View>
      )}/>
    )}
    </View>

    <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.primaryButton} onPress={() => submitPlan()}>
        <Text style={styles.primaryButtonText}>Confirm</Text>
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

function ItineraryScreen({navigation}: itineraryProps){
    const router = useRouter();
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [time, setTime] = useState<string[]>([]);

  
    const fetchRideData = async () => {
      setLoading(true);
    
      const {column, value} = heightFilter();
      
      const {data: parkInformation, error} = await supabase
      .from("park_information")
      .select("*")
      .limit(rideInterval())
      .lte(column, value);
    
      if (error){
        console.log(error.message);
      } else {
        setData(parkInformation);
      }
      setLoading(false);
    }
    
    useEffect(() => {
      fetchRideData();
    }, []);

    /* based on research the best method would a foreach loop or .map operation through the arrays loop
    rides are saved to reorderedRides. Information needed start time (userInput[0][1]), leave time (userInput[0][2]), and date (userInput[0][0]). Information for table is the id and the table name from the database.
    Use the foreign key in the databse to connect park_information to the other rides */
    const submitPlan = () => {
      const rideIds = reorderedRides.map(ride => ride.id)
      console.log(rideIds);
      router.push("/HomePage");
    }

    const heightFilter = (): { column: string; value: number } | undefined => {
      let userHeight = userInput[1][2];

      if (userHeight === ""){
        userHeight = "70 in";
      }

      const regex = /^(\d+)\s*(\D*)$/
      const parseHeight = userHeight.match(regex);


      if (parseHeight){
        //setHeightUnit(parseHeight[2]);
        let number = parseInt(parseHeight[1], 10);
        let unit = parseHeight[2].toLowerCase();
        if (unit === "in"){
          return {column: "height_inches", value: number};
        } else if (unit === "cm"){
          return {column: "height_centimeters", value: number};
        }
      }
    }

    
  
  const rideInterval = () => {
    const date = userInput[0][0];
    //arrival time information
    const arrivalTime = userInput[0][1];
    const parseArrivalTime = arrivalTime.split(" ");
    const arrivalTimeString = new Date(`${date} ${parseArrivalTime[0]}`);
    let arrivalMinutes = arrivalTimeString.getMinutes();
    let arrivalHour = arrivalTimeString.getHours();
    //leave time information 
    const leaveTime = userInput[0][2];
    const parseLeaveTime = leaveTime.split(" ");
    const leaveTimeString = new Date(`${date} ${parseLeaveTime[0]}`);
    let leaveMinutes = leaveTimeString.getMinutes();
    let leaveHour = leaveTimeString.getHours();
    // breakfast time information
    const breakfastTime = userInput[1][0];
    const parseBreakfastTime = breakfastTime.split(" ");
    const breakfastTimeString = new Date(`${date} ${parseBreakfastTime[0]}`);
    let breakfastMinutes = breakfastTimeString.getMinutes();
    let breakfastHour = breakfastTimeString.getHours();
    //lunch time informaiton
    const lunchTime = userInput[1][1];
    const parseLunchTime = lunchTime.split(" ");
    const lunchTimeString = new Date(`${date} ${parseLunchTime[0]}`);
    let lunchMinutes = lunchTimeString.getMinutes();
    let lunchHour = lunchTimeString.getHours();
    //loop to get incremented minutes
  //convert time to 24 hour format in order to run the loop conditions 
    if (parseArrivalTime[1].toLowerCase() == "pm"){
      arrivalHour += 12;
    }
    if (parseLeaveTime[1].toLowerCase() == "pm"){
      leaveHour += 12;
    }
    let leaveUserHour = leaveHour;
    let leaveUserMinutes = leaveMinutes - 45;
    if (leaveUserMinutes < 0){
      leaveUserHour -= 1;
      leaveUserMinutes += 60;
    }
    //let leaveUserTime = (`${leaveUserHour}:${leaveUserMinutes}`);

    //breakfast time increment
    let userBreakfastHour = breakfastHour;
    let userBreakfastMinutes = breakfastMinutes + 45;
    if(userBreakfastMinutes > 60){
      userBreakfastHour += 1;
      userBreakfastMinutes -= 60;
    }
    let userBreakfastTime = (`${userBreakfastHour}:${userBreakfastMinutes}`);
    console.log("Brekafast is:",userBreakfastTime);
    let originalBreakfastHour = breakfastHour;
    let originalBreakfastMinutes = breakfastMinutes;
    let originalBreakfastTime = (`${breakfastHour}:${breakfastMinutes}`);
    //console.log("original: ", originalBreakfastTime);

    //lunch time increment 
    let userLunchHour = lunchHour;
    let userLunchMinutes = lunchMinutes + 45;
    if(userLunchMinutes > 60){
      userLunchHour += 1;
      userLunchMinutes -= 60;
    }
    let userLunchTime = (`${userLunchHour}:${userLunchMinutes}`);
    let originalLunchTime = (`${lunchHour}:${lunchMinutes}`);
    //console.log("Lunch is:",userLunchTime);
  
    const schedule = [];
    while(
      arrivalHour < leaveUserHour || 
      (arrivalHour === leaveUserHour && arrivalMinutes < leaveUserMinutes)
    ){
      arrivalMinutes += 45;

      if (arrivalMinutes >= 60){
        arrivalHour += Math.floor(arrivalMinutes / 60);
        arrivalMinutes = arrivalMinutes % 60;
     }
     let displayHour = arrivalHour;
     var suffix = arrivalHour < 12 ? "AM":"PM";
     if (displayHour > 12 ){
       displayHour -= 12;
     }
     let originalArrivalTime = (`${displayHour}:${arrivalMinutes}`);
     //console.log(originalArrivalTime);
      
      if ((originalArrivalTime >= originalBreakfastTime) && 
          (originalArrivalTime < userBreakfastTime)){
            continue;
          }

          if ((originalArrivalTime >= originalLunchTime) && 
          (originalArrivalTime < userLunchTime)){
            continue;
          }

      let iterator = (`${displayHour}:${arrivalMinutes.toString().padStart(2, "0")} ${suffix}`);
      schedule.push(iterator);
      setTime(prevTime => [...prevTime, iterator]);
    }
    //console.log("Schedule is:", schedule);
      return (schedule.length);
  }

  const chosenRide = userInput[2][2];
  //console.log("Chosen ride:", chosenRide);
  //console.log("All ride names:", data.map(d => d.ride_name));
  const reorderedRides = [
    ...data.filter(item=> item.ride_name === chosenRide),
    ...data.filter(item => item.ride_name !== chosenRide)
  ];
  //console.log(reorderedRides);
  return(
    <View style={styles.container}>
      
      <View style={styles.itintopSection}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.itinheaderText}>Awesome! Here is your itinerary</Text>
      </View>

      <View style={styles.itinmiddleSection}>
      { loading ? ( 
        <ActivityIndicator />
      ) : (
        <FlatList 
        data={reorderedRides}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
         <View key={index} style={styles.itineraryContainer}>
              <Image source={{uri: item.images}} style={styles.itineraryImage} />
            <View style={styles.itinTextContainer}>
              <Text style={styles.itinselectionButtonText}>{item.ride_name}</Text>
              <Text style={styles.itinrideDescription}>Arrive by {time[index]}</Text>
              {/*<TouchableOpacity style={styles.directionsButton}>
                <Text style={styles.directionsButtonText} numberOfLines={1} adjustsFontSizeToFit>Get Directions</Text>
              </TouchableOpacity>*/}
            </View>
            <TouchableOpacity>
              <Icon name="delete" style={styles.deleteIcon} />
            </TouchableOpacity>
        </View>
      )}/>
    )}
    </View>

    <View style={styles.bottomSection}>
      <TouchableOpacity style={styles.primaryButton} onPress={() => submitPlan()}>
        <Text style={styles.primaryButtonText}>Confirm</Text>
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

function ConfirmationScreen({navigation}: confirmationProps){
  return(
  <View style={styles.container}>
    <Text>You have made it to the end of the show.</Text>
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
      <NestedStack.Screen name="HeightScreen" component={HeightScreen}/>
      <NestedStack.Screen name="DisabilityScreen" component={DisabilityScreen}/>
      <NestedStack.Screen name="RideScreen" component={RideScreen}/>
      <NestedStack.Screen name="AttractionScreen" component={AttractionScreen}/>
      <NestedStack.Screen name="SuggestedScreen" component={SuggestedScreen}/>
      <NestedStack.Screen name="ItineraryScreen" component={ItineraryScreen}/>
      <NestedStack.Screen name="ConfirmationScreen" component={ConfirmationScreen}/>
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
    color: "#000000",
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
    width: 80, 
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
    width: 125,
    fontSize: 12, 
    color: "#666",
    //flexShrink: 1, 
  },
  suggestheaderText: {
    fontSize: width * 0.06,
    fontFamily: "Montserrat-Bold",
    color: "#310082",
    textAlign: "center",
    flexShrink: 1,
    marginLeft: 20, // Prevents overlap with back button
  },
  itintopSection: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
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
    //alignItems: "center",
    //justifyContent: "center",
    marginBottom: 5,
    //alignSelf: "center",
    paddingTop: 10,
    marginTop: 30,
},
  itinheaderText: {
    fontSize: width * 0.03,
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
    width: 70, 
    height: 70, 
    borderRadius: 35,
    //resizeMode: "cover",
    marginRight: 15,
  },
  itinTextContainer: {
    flex: 1, 
    //paddingLeft: 15, 
    //justifyContent: "center",
  },
  itinselectionButtonText: {
    fontSize: 16, 
    fontFamily: "Montserrat-Bold",
    fontWeight: "bold",
    color: "#000",
  },
  itinrideDescription: {
    fontSize: 14, 
    color: "#666",
    //marginVertical: 5,
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

