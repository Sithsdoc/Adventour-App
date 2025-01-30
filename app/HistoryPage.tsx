import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HistoryPage(){
    const router = useRouter();
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.push("/HomePage")}>
                    <Icon style={styles.backIcon} name="arrow-back" />
                </TouchableOpacity>                
                <Text style={styles.title}>History</Text>
            </View>

            <View style={styles.middleSection}>
                <View style={styles.historyItem}>
                    <Text style={styles.date}>11/15/24</Text>
                    <Text style={styles.hours}>8 hours</Text>
                </View>
                <View style={styles.historyItem}>
                    <Text style={styles.date}>10/16/24</Text>
                    <Text style={styles.hours}>7 hours</Text>
                </View>
                <View style={styles.historyItem}>
                    <Text style={styles.date}>09/14/24</Text>
                    <Text style={styles.hours}>5 hours</Text>
                </View>
                <View style={styles.historyItem}>
                    <Text style={styles.date}>09/11/24</Text>
                    <Text style={styles.hours}>8 hours</Text>
                </View>
                <View style={styles.historyItem}>
                    <Text style={styles.date}>08/16/24</Text>
                    <Text style={styles.hours}>2 hours</Text>
                </View>
                <View style={styles.historyItem}>
                    <Text style={styles.date}>07/14/24</Text>
                    <Text style={styles.hours}>5 hours</Text>
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
        fontFamily: "Montserrat", 
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%',
        paddingTop: 20, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 30, 
        fontFamily: "Montserrat", 
    },
    backButton: {
        position: "absolute",
        top: 10, 
        left: 40, 
        zIndex: 10,
    },
    backIcon: {
        color: "#000000",
        fontSize: 30,
    },
    middleSection: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        width: '100%',
    },
    historyItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '80%',
        padding: 10,
        marginBottom: 15,
        backgroundColor: 'white',  
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8E7EFE', 
    },
    date: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: "Montserrat", 
    },
    hours: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: "Montserrat", 
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
