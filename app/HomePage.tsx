import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            <Text style={styles.boxTime}>Arrive at 9:30AM</Text>
            <TouchableOpacity style={[styles.button, styles.detailsButton]}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.directionsButton]}>
              <Text style={styles.buttonText}>Directions</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.separator}/>

        <View style={styles.middleSection}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/HistoryPage")}>
              <Icon name="history" size={30} color="#310082" />
              <Text style={styles.iconText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/ReminderPage")}>
              <Icon name="notifications" size={30} color="#310082"/>
              <Text style={styles.iconText}>Reminder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/MapPage")}>
              <Icon name="event" size={30} color="#310082"/>
              <Text style={styles.iconText}>Shows/Events</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/MapPage")}>
              <Icon name="restaurant" size={30} color="#310082"/>
              <Text style={styles.iconText}>Dining</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/MapPage")}>
              <Icon name="accessible" size={30} color="#310082"/>
              <Text style={styles.iconText}>Accessibility</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/MapPage")}>
              <Icon name="attractions" size={30} color="#310082"/>
              <Text style={styles.iconText}>Top Rides</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.equalButton} onPress={() => router.push("/QuestionPage")}>
              <Text style={styles.buttonText}>Start Planning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.equalButton} onPress={() => router.push("/MapPage")}>
              <Text style={styles.buttonText}>View Map</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="home" color="#C8A6FF" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push("/QuestionPage")}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",  // Ensure the content starts at the top
    paddingBottom: 70,  // Added padding at the bottom to avoid touching the navbar
  },
  logo: {
    width: 370,
    height: 190,
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
  titleText: {
    fontFamily: "Montserrat",
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "flex-start",
    color: "#310082",
  },
  sectionText: {
    fontSize: 18,
  },
  box: {
    width: "120%",
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
    marginBottom: 20,  // Added margin-bottom to create space
  },
  button: {
    backgroundColor: "#310082",
    height: 50,  // Same height for both buttons
    width: "80%",  // Set both buttons to have the same width (80% of the parent width)
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Space between buttons
  },
  detailsButton: {
    backgroundColor: "#8E7EFE",  // Specific color for "Details" button
  },
  directionsButton: {
    backgroundColor: "#8E7EFE",  // Specific color for "Directions" button
  },
  equalButton: {
    backgroundColor: "#310082",
    height: 50, // Same height for both buttons
    width: "70%", // Adjust width to make them the same length
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,  // Adds space between the buttons
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center", // Ensures the text is centered
    flexShrink: 1, // Prevents text from overflowing and makes it fit in one line
  },
  separator: {
    width: "100%", 
    height: 1, 
    backgroundColor: "#8E7EFE", 
    marginTop: 20, 
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",  // Centers the buttons in the row
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
  weatherTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 60,
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
