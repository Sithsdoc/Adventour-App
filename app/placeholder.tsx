import { StyleSheet, View, Button, Text, Image, TouchableOpacity,  ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect } from "react"; 
import { Picker } from '@react-native-picker/picker';
//import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Touchable } from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "../utils/supabase";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const MainStack =  createNativeStackNavigator<RootStackParamList>();
const NestedStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList ={
    ListPage: undefined,
    NestedScreens: undefined,
}

type listProps = NativeStackScreenProps<RootStackParamList, "ListPage">;

/* objectives:
1. Make the list dynamic so that it works with the database
2. Make the filter button bigger and move it to the center */


function ListPage({route, navigation}: listProps){
    const [selectedValue, setSelectedValue] = useState("attractions");
    const router = useRouter();
      const [parkData, setParkData] = useState<any[]>([]);
      const [loading, setLoading] = useState(true);
      const [parkTime, setParkTime] = useState<string[]>([]);
      //let selectedDatabase = "park_information";
    
      const fetchParkData = async () => {
        setLoading(true);

        let selectedDatabase = "";
        console.log(selectedValue);
        switch(selectedValue){
            case "attractioins":
                selectedDatabase = "Rides";
                break;
            case "dining":
                selectedDatabase = "Dining";
                break;
            case "shows":
                selectedDatabase = "Shows";
                break;
            case "shops":
                selectedDatabase = "Shops";
                break;
            default:
                selectedDatabase = "park_information";
        }
        
        const {data: selectedParkInformation, error} = await supabase
        .from(selectedDatabase)
        .select("*");
      
        if (error){
          console.log(error.message);
        } else {
          setParkData(selectedParkInformation);
        }
        setLoading(false);
      }
      
      useEffect(() => {
        fetchParkData();
      }, [selectedValue]);

    const listContent = () => {
        switch(selectedValue) {
            case "attractions":
                //selectedDatabase = "Rides";
                return (
                    <View style={styles.mainContainer}>
                        {loading ? (
                            <ActivityIndicator/>
                        ) : (
                            <FlatList
                            data={parkData}
                            keyExtractor={(item) => item.id}
                            renderItem={({item, index}) => (
                              <View key={index} style={styles.itineraryContainer}>
                                <SafeAreaProvider>
                                  <SafeAreaView>
                                    <Image source={{uri: item.images}} style={styles.listImage} />
                                    <View style={styles.listTextContainer}>
                                        <Text style={styles.listTitle}>{item.ride_name}</Text>
                                        <Text style={styles.listSubtitle}>{item.description}</Text>
                                    </View>
                                  </SafeAreaView>
                                </SafeAreaProvider>              
                              </View>
                            )}/>
                            )}
                    </View>
                );
            case "dining":
                    //selectedDatabase = "Dining";
                return (
                    <View style={styles.mainContainer}>
                    {loading ? (
                        <ActivityIndicator/>
                    ) : (
                        <FlatList
                        data={parkData}
                        keyExtractor={(item) => item.id}
                        renderItem={({item, index}) => (
                          <View key={index} style={styles.itineraryContainer}>
                            <SafeAreaProvider>
                              <SafeAreaView>
                                <Image source={{uri: item.image}} style={styles.listImage} />
                                <View style={styles.listTextContainer}>
                                    <Text style={styles.listTitle}>{item.dining_name}</Text>
                                    <Text style={styles.listSubtitle}>{item.description}</Text>
                                </View>
                              </SafeAreaView>
                            </SafeAreaProvider>              
                          </View>
                        )}/>
                      )}
                    </View>
                    );
            case "shows":
                //selectedDatabase = "Shows";
                return (
                    <View style={styles.mainContainer}>
                    {loading ? (
                        <ActivityIndicator/>
                    ) : (
                        <FlatList
                        data={parkData}
                        keyExtractor={(item) => item.id}
                        renderItem={({item, index}) => (
                          <View key={index} style={styles.itineraryContainer}>
                            <SafeAreaProvider>
                              <SafeAreaView>
                                <Image source={{uri: item.image}} style={styles.listImage} />
                                <View style={styles.listTextContainer}>
                                    <Text style={styles.listTitle}>{item.show_name}</Text>
                                    <Text style={styles.listSubtitle}>{item.description}</Text>
                                </View>
                              </SafeAreaView>
                            </SafeAreaProvider>              
                          </View>
                        )}/>
                      )}
                    </View>
                );
            case "shops":
                //selectedDatabase = "Shops";
                 return(
                    <View style={styles.mainContainer}>
                    {loading ? (
                        <ActivityIndicator/>
                    ) : (
                        <FlatList
                        data={parkData}
                        keyExtractor={(item) => item.id}
                        renderItem={({item, index}) => (
                          <View key={index} style={styles.itineraryContainer}>
                            <SafeAreaProvider>
                              <SafeAreaView>
                                <Image source={{uri: item.image}} style={styles.listImage} />
                                <View style={styles.listTextContainer}>
                                    <Text style={styles.listTitle}>{item.shop_name}</Text>
                                    <Text style={styles.listSubtitle}>{item.description}</Text>
                                </View>
                              </SafeAreaView>
                            </SafeAreaProvider>              
                          </View>
                        )}/>
                      )}
                    </View>
                 );

            default:
                return(
                    <Text>No vlaue selected</Text>
                );
        }
    }
 
    return(
        <View style={styles.listContainer}>
 
            <View style={styles.topSection}>
                <View style={styles.mainPicker}>
                    <Picker style={styles.pickerlist} selectedValue={selectedValue} onValueChange={(item) => setSelectedValue(item)}>
                        <Picker.Item label="Attractions" value={"attractions"}/>
                        <Picker.Item label="Dining" value={"dining"}/>
                        <Picker.Item label="Shows" value={"shows"}/>
                        <Picker.Item label="Shops" value={"shops"}/>
                    </Picker>
                </View>
                <View>
                </View>
            </View>
 
 
            <View style={styles.listMiddleSection}>
                {listContent()}
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
 

function NestedScreens(){
    return(
        <NestedStack.Navigator screenOptions={{ headerShown: false }}>
            <NestedStack.Screen name="ListPage" component={ListPage}/>
        </NestedStack.Navigator>
    );
}

export default function MapPage(){
    return(
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="NestedScreens" component={NestedScreens}/>
        </MainStack.Navigator>
    );
}


    //CSS for dividing sections
    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: "#fff",
        },
        topSection: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",  // Prevents it from stretching everything
            width: "100%",  // Ensures it doesn't take unnecessary space
            paddingHorizontal: 10,
            gap: 10,  // Adds spacing between elements
        },
        mainHeaderText: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#200082",
        },
        mainFilterButton: {
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: "#FFFFFF",
            borderRadius: 5,
            width: "auto",  // Ensure it only takes as much space as needed
            minWidth: 80,  // Optional: Set a reasonable min width
            alignSelf: "flex-start",  // Ensures it doesn't expand
        },
        listButton: {
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: "#1C088A",
            borderRadius: 5,
            flexShrink: 1,  // Prevents it from stretching too far
        },
        listButtonText: {
            color: "#fff",
        },
        mainMiddleSection: {
            flex: 8,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
        },
        mainImage: {
            width: "100%",
            height: "100%",
            resizeMode: "cover",
        },
        DropdownContainer: {
            top: 10,
            left: '10%',
            width: '30%', // Reduce width
            backgroundColor: '#fff',
            padding: 1, // Reduce padding
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        },
        mainWaitTimeBox: {
            position: "absolute",
            backgroundColor: "black",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
        },
        mainWaitTimeText: {
            color: "white",
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
        listContainer: { 
            flex: 1, 
            backgroundColor: '#FFFFFF' 
        },
        listMiddleSection: { 
            flex: 1, 
            padding: 10 
        },
        listItem: { 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 10, 
            borderBottomWidth: 1, 
            borderBottomColor: '#CCC' 
        },
        listImage: { 
            width: 70,  // Increase size
            height: 70, // Increase size
            borderRadius: 35, 
            marginRight: 15 // More spacing from text
        },
        listTitle: { 
            fontSize: 20, // Increase font size
            fontWeight: 'bold', 
            color: '#000'
        },
        listSubtitle: {  
            fontSize: 16, // Increase font size
            color: '#666' 
        },
        listNoValue: { 
            textAlign: 'center', 
            padding: 20, 
            fontSize: 16, 
            color: '#999' 
        },
        listClosed: {
            fontSize: 14,
            color: 'red',
            fontWeight: 'bold',
        },
        ContentContainer: {
            padding: 10,
        },
        listCard: { 
            backgroundColor: '#F9F9F9', 
            borderRadius: 15, // Increase for rounded look
            padding: 20, // Increase padding for larger size
            marginVertical: 8, // Increase spacing between cards
            flexDirection: 'row', 
            alignItems: 'center', 
            borderBottomWidth: 1, 
            borderBottomColor: '#CCC'
        },
        listTextContainer: { 
            flex: 1 
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
          mainPicker: {
            width: "100%",  
            alignItems: "center",
            justifyContent: "center",  
            fontSize: 16,
            fontWeight: "bold",
            color: "#200082",
        },
          pickerlist: {
            width: 250,
            height: 60,
            fontSize: 18,
            color: "#FFFFFF",
            backgroundColor: "#310082",
          },
    });