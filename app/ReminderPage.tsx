import { StyleSheet, View, Button, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ReminderPage(){
    return(
        <View style={styles.container}>

            <View style={styles.topSection}>
                <Text>Reminder</Text>
                <TouchableOpacity>
                    <Icon name="arrow_back"/>
                </TouchableOpacity>
                <Text>Your ride starts in 5 mintues!</Text>
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

      },
    });