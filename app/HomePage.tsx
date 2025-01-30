import { StyleSheet, View, Button, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Touchable } from "react-native";
import { useRouter } from "expo-router";

export default function HomePage(){
    const router = useRouter();

    
    return (
      <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require("../image/logo.svg")} style={styles.logo}/>
      </View>
      <View style={styles.separator}/>

      <View style={styles.middleSection}>
        <Text style={styles.titleText}>Upcoming Events</Text>
        <View style={styles.box}>
          <Text style={styles.boxText}>Iron Gwazi</Text>
          <Text style={styles.boxTime}>Arrive at time x</Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Directions</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator}/>

      <View style={styles.middleSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="history" size={30} color="#310082" onPress={() => router.push("/HistoryPage")}/>
            <Text style={styles.iconText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/ReminderPage")}>
            <Icon name="notifications" size={30} color="#310082"/>
            <Text style={styles.iconText}>Reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="event" size={30} color="#310082" onPress={() => router.push("/MapPage")}/>
            <Text style={styles.iconText}>Shows & Events</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="restaurant" size={30} color="#310082" onPress={() => router.push("/MapPage")}/>
            <Text style={styles.iconText}>Dining</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="accessible" size={30} color="#310082" onPress={() => router.push("/MapPage")}/>
            <Text style={styles.iconText}>Accessibility</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="attractions" size={30} color="#310082" onPress={() => router.push("/MapPage")}/>
            <Text style={styles.iconText}>Top Rides</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Button color="#310082" title="Start Planning" onPress={() => router.push("/QuestionPage")}/>
          <Button color="#310082" title="View Map" onPress={() => router.push("/MapPage")}/>
        </View>
      </View>

        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="home" color="#C8A6FF" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="assignment" color="#C8A6FF" size={30} onPress={() => router.push("/QuestionPage")}/>
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

const styles = StyleSheet.create({
    //CSS for dividing sections
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: 370,
      height: 200,
      alignSelf: "center",
      marginBottom: 50,
      marginTop: 20,
    },
    topSection: {
      flex: 1, 
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 90,
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
    //CSS for base text fonts 
    titleText: {
      fontFamily: "Atkinson",
      fontSize: 24,
      fontWeight: "bold",
      justifyContent: "flex-start",
      color: "#310082",
    },
    sectionText: {
      fontSize: 18,
    },
    //CSS for box content and the separating line
    box: {
      width: "90%",
      backgroundColor: "#310082",
      padding: 15,
      borderRadius: 10,
      shadowColor: "#000",
      marginTop: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    boxText: {
      fontWeight: "bold",
      fontFamily: "Montserrat",
      fontSize: 16,
      color:"#FFFFFF",
      textAlign: "center",
    },
    boxTime: {
      fontSize: 13,
      fontFamily: "Atkinson Hyperlegible",
      color:"#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#8E7EFE",
      width: "100%",
      height: 40,
      borderRadius: 10,
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    separator: {
      width: "100%", 
      height: 1, 
      backgroundColor: "#8E7EFE", 
      marginTop: 20, 
    },
    //CSS for the 6 different icon buttons
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
      width: "100%",
    },
    iconButton: {
      alignItems: "center",
      flex: 1,
      marginHorizontal: 5,
    },
    iconText: {
      marginTop: 5,
      fontSize: 12,
    },
    //CSS for Weather Boxes 
    weatherTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 60, // Adjust this value to move the title down
    },
    weatherContainer: {
      flexDirection: "row", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: 10, 
      marginTop: 25, 
      borderRadius: 10,
    },
    weatherBox: {
      width: 600,
      height: "100%",
      backgroundColor: "#310082",
      padding: 15,
      borderRadius: 10,
      shadowColor: "#000",
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
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
  