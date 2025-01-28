import { StyleSheet, View, Button, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ReminderPage(){
  const router = useRouter();
    return(
        <View style={styles.container}>

            <View style={styles.topSection}>
                <Text style={styles.headerText}>Reminder</Text>
                <TouchableOpacity style={styles.backButton} onPress={() => router.push("/HomePage")}>
                    <Icon style={styles.backIcon} name="arrow-back"/>
                </TouchableOpacity>
                <Text>Your ride starts in 5 mintues!</Text>
            </View>

            <View style={styles.middleSection}>
              <View>
                <Text>Iron Gwazi</Text>
                <Text>Arrive by 9:30AM</Text>
              </View>
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
      //CSS for texxt
      headerText: {
        fontSize: 24,
        fontFamily: "Montserrat-Bold",
        color: "#310082",
        textAlign: "center",
      },
      //css for backicon
      backButton: {
        position: "absolute",
        left: 20,
        top: 40,
      },
      backIcon: {
        color: "#310082",
        fontSize: 30,
      },
    });