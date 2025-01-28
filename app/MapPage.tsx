import { StyleSheet, View, Button, Text, Image, TouchableOpacity } from "react-native";
import React from "react"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Touchable } from "react-native";
import QuestionPage from "./QuestionPage";
import { useRouter } from "expo-router";


export default function MapPage(){
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                
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
});