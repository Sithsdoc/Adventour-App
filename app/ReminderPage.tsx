import { StyleSheet, View, Text, Button, TextInput,  Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("window");

export default function ReminderPage(){
  const router = useRouter();
  return(
    <View style={remindStyles.container}>
      <View style={remindStyles.topSection}>
        <View style={remindStyles.headerContainer}>
          <TouchableOpacity style={remindStyles.backButton} onPress={() => router.push("/HomePage")}>
            <Icon style={remindStyles.backIcon} name="arrow-back" />
          </TouchableOpacity>
          <Text style={remindStyles.headerText}>Reminder</Text>
        </View>
        <Text style={remindStyles.subHeaderText}>Your ride starts in 5 minutes!</Text>
      </View>

      <View style={remindStyles.middleSection}>
        <View style={remindStyles.card}>
          <Image source={require("../image/IronGwazi.png")} style={remindStyles.rideImage} />
          <View style={remindStyles.cardContent}>
            <Text style={remindStyles.rideName}>Iron Gwazi</Text>
            <Text style={remindStyles.rideTime}>Arrive by 9:30AM</Text>
            <TouchableOpacity style={remindStyles.directionsButton}>
              <Text style={remindStyles.directionsText}>Directions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={remindStyles.navbar}>
        <TouchableOpacity style={remindStyles.navButton} onPress={() => router.push("/HomePage")}>
          <Icon name="home" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={remindStyles.navButton}>
          <Icon name="assignment" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={remindStyles.navButton} onPress={() => router.push("/MapPage")}>
          <Icon name="place" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={remindStyles.navButton} onPress={() => router.push("/ProfilePage")}>
          <Icon name="account-circle" color="#C8A6FF" size={30}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const remindStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  topSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1C088A",
    textAlign: "center",
  },
  subHeaderText: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
    width: "80%",
    alignSelf: "center",
    lineHeight: 24,
  },
  backButton: {
    position: "absolute",
    left: 10,
  },
  backIcon: {
    color: "#000000",
    fontSize: 30,
  },
  middleSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    width: "100%",
  },
  card: {
    backgroundColor: "#FAF5FF",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.9,
    overflow: "hidden",
    marginTop: 10,
    borderColor: "#8E7EFE",
    borderWidth: 1,
  },
  rideImage: {
    width: "100%",
    height: height * 0.25,
  },
  cardContent: {
    padding: 15,
    alignItems: "center",
  },
  rideName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  rideTime: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  directionsButton: {
    backgroundColor: "#310082",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10,
    width: "100%",
  },
  directionsText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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