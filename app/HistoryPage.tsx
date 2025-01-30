import { StyleSheet, View, Button, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HistoryPage(){
    const router = useRouter();
    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.backButton} onPress={() => router.push("/HomePage")}>
                    <Icon style={styles.backIcon} name="arrow-back" />
                </TouchableOpacity>                
                <Text>History</Text>
            </View>

            <View style={styles.middleSection}>
                <View>
                    <Text>11/15/24</Text>
                    <Text>8 hours</Text>
                </View>
                <View>
                    <Text>10/16/24</Text>
                    <Text>10 hours</Text>
                </View>
                <View>
                    <Text>09/14/24</Text>
                    <Text>5 hours</Text>
                </View>
                
            </View>


        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="home" color="#C8A6FF" size={30} onPress={() => router.push("/HomePage")}/>
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
    },
    middleSection: {
        flex: 2, 
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
      },
      backButton: {
        position: "absolute",
        left: -1,
      },
      backIcon: {
        color: "#000000",
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