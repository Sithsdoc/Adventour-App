//import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useState, useEffect} from "react";
import { FlatList, StyleSheet, View, Button, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useRouter } from "expo-router";
import { supabase } from "../utils/supabase";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
//import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
//import { CheckBox, Input } from "@rneui/themed";
//import { MaterialCommunityIcons } from "@expo/vector-icons";

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

let userInput = [
["","",""], 
["","",""], 
["","",""], 
[""]];
//use .pop() to delete information from an array or delete word using "delete userInput[][]"
function CalendarPage({navigation}: calendarProps) {
      const router = useRouter();
      const [selectedDate, setSelectedDate] = useState<string| null>("");
      

      const onDayPress = (day: { dateString: string }) => {
        //console.log(day);
        setSelectedDate(day.dateString);
        console.log("Selected Date:", day.dateString);
      };

      const pushToArray = () => {
        if(selectedDate){
        userInput[0][0] = selectedDate;
        console.log(userInput);
        } else {
          console.log("nothing saved to array");
        }
        navigation.navigate("TimeScreen");
      }

      
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
      <Text style={styles.headerText}>Plan My Day</Text>
      </View> 
      <View style={styles.CalendarmiddleSection}>
      <Text style={styles.questionText}>Select the day(s) you will spend at the park:</Text>
      <Calendar onDayPress={onDayPress} />
      <Text>The date you selected is {selectedDate}</Text>
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
        console.log(userInput);
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
  );
}

function PlanScreen({navigation}: planProps) {
      const router = useRouter();

      const handleTimeDelete = () => {
        delete userInput[0][1];
        delete userInput[0][2];
        navigation.navigate("TimeScreen");
      }
      //at this point in the code the system needs to generate a random list of rides from the options in the databse for suggestplan
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
        console.log(userInput);
        navigation.navigate("HeightScreen");
        } else {
          setErrorMessage("Please enter the time in the correct format");
        }
      }

      const skipFoodTime = () => {
        userInput[1][0] = ("");
        userInput[1][1] = ("");
        console.log(userInput);
        navigation.navigate("HeightScreen");
      }
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
        console.log(userInput);
        navigation.navigate("DisabilityScreen");
        } else {
          setErrorMessage("Please enter the height in the correct format");
        }
      }

      const skipHeight = () => {
        userInput[1][2] = ("");
        console.log(userInput);
        navigation.navigate("DisabilityScreen");
      }

      const handleFoodDelete = () => {
        delete userInput[1][0];
        delete userInput[1][1];
        navigation.navigate("FoodScreen");
      }
  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" style={styles.backIcon} onPress={handleFoodDelete}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.questionText}>What is the height of the shortest person in your group (Enter their
          height in inches or centimeters):</Text>
        <TextInput placeholder="Enter height" 
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
  );
}

function DisabilityScreen({navigation}: disabilityProps) {
      const router = useRouter();
      const [userDisability, setUserDisability] = useState("");

      const answerSelection = (answer: string) => {
        setUserDisability(answer);
        console.log(answer);
        userInput[2][0] = answer;
      }

      const handleAnswer = () => {
        console.log(userInput);
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
        <TouchableOpacity style={styles.selectionButton} onPress={() => answerSelection("Remain in Wheelchair")}>
          <Text style={styles.selectionButtonText}>Remain in Wheelchair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton} onPress={() => answerSelection("Include Shuttles")}>
          <Text style={styles.selectionButtonText}>Include Shuttles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton} onPress={() => answerSelection("Service Animals")}>
          <Text style={styles.selectionButtonText}>Service Animals</Text>
        </TouchableOpacity>
        <Text>You Chose {userDisability}</Text>
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
        console.log(userInput);
        navigation.navigate("AttractionScreen");
      }

      const skipRide = () => {
        userInput[2][1] = ("");
        console.log(userInput);
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
        <TouchableOpacity style={styles.selectionButton} onPress={() => rideSelection("Thrill Rides")}>
          <Text style={styles.selectionButtonText}>Thrill Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton} onPress={() => rideSelection("Slow Rides")}>
          <Text style={styles.selectionButtonText}>Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton} onPress={() => rideSelection("Water Rides")}>
          <Text style={styles.selectionButtonText}>Water Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton} onPress={() => rideSelection("Animal Experiences")}>
          <Text style={styles.selectionButtonText}>Animal Experiences</Text>
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

      const handleRideDelete = () => {
        delete userInput[2][1]
        navigation.navigate("RideScreen");
      }

  return (
    <View style={styles.container}>
      
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton} onPress={handleRideDelete}>
          <Icon name="arrow-back" style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Customizable Itinerary</Text>
      </View>

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

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("ItineraryScreen")}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("ItineraryScreen")}>
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
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  //code for saving values in loop
  /*Objective:
  1. get the value in the array and limit the number of rides that appear
  2. Take the different times and place them in the arrival time interval
  **call the rideInterval() logic in the function to get the information for the arrival time on the logic into the html*/
  const schedule: string[] = [];
  let scheduleAmount = schedule.length;
  console.log(schedule);
  console.log(scheduleAmount);


const fetchRideData = async () => {
  setLoading(true);
  
  const {data: parkInformation, error} = await supabase
  .from("park_information")
  .select("*")
  .limit(rideInterval());

  if (error){
    console.log(error.message);
  } else {
    setData(parkInformation);
    rideInterval();
    //console.log("Data here is:", data);
  }
  setLoading(false);
}

useEffect(() => {
  fetchRideData();
}, []);
//take the arrival time and increment by 45 minutes until the leave time is met
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

  while(
    arrivalHour < leaveHour || (arrivalHour === leaveHour && arrivalMinutes < leaveUserMinutes)
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
    schedule.push(`${displayHour}:${arrivalMinutes.toString().padStart(2, "0")} ${suffix}`);
  }
  return schedule.length;
  //console.log(schedule);
  //console.log(schedule.length);
}
console.log(schedule);

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
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
         <View key={index} style={styles.itineraryContainer}>
          <SafeAreaProvider>
            <SafeAreaView>
              <Image  style={styles.itineraryImage} />
            <View style={styles.itinTextContainer}>
              <Text style={styles.itinselectionButtonText}>{item.ride_name}</Text>
              <Text style={styles.itinrideDescription}>Arrive by</Text>
              <TouchableOpacity style={styles.directionsButton}>
                <Text style={styles.directionsButtonText} numberOfLines={1} adjustsFontSizeToFit>Get Directions</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Icon name="delete" style={styles.deleteIcon} />
            </TouchableOpacity>
          </SafeAreaView>
          </SafeAreaProvider>
        </View>
      )}/>
    )}
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
      <NestedStack.Screen name="HeightScreen" component={HeightScreen}/>
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
  suggestheaderText: {
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    color: "#310082",
    textAlign: "center",
    flexShrink: 1,
    marginLeft: 20, // Prevents overlap with back button
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

