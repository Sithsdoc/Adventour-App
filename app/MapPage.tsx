import { StyleSheet, View, Button, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react"; 
import { Picker } from '@react-native-picker/picker';
//import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Touchable } from "react-native";
import { useRouter } from "expo-router";


const MainStack =  createNativeStackNavigator<RootStackParamList>();
const NestedStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList ={
    MainPage: undefined,
    ListPage: { selectedValue: string},
    NestedScreens: undefined,
}

type mainProps = NativeStackScreenProps<RootStackParamList, "MainPage">;
type listProps = NativeStackScreenProps<RootStackParamList, "ListPage">;



function MainPage({navigation}: mainProps) {
    const router = useRouter();
    const [selectedValue, setSelectedValue] = useState("waitTimes");

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topSection}>
                <View style={{width: "auto", alignSelf: "flex-start"}}>
                    <Text>Filter</Text>
                </View>
                <View style={styles.mainPicker}>
                    <Picker selectedValue={selectedValue} onValueChange={(item) => setSelectedValue(item)}>
                        <Picker.Item label="Wait Times" value={"waitTimes"}/>
                        <Picker.Item label="Attractions" value={"attractions"}/>
                        <Picker.Item label="Dining" value={"dining"}/>
                        <Picker.Item label="Restrooms" value={"restrooms"}/>
                        <Picker.Item label="Shows" value={"shows"}/>
                    </Picker>
                </View>
                <View>
                    <TouchableOpacity style={styles.listButton} onPress={() => navigation.navigate("ListPage", {selectedValue})}>
                        <Text style={styles.listButtonText}>Show list</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.mainMiddleSection}>
                <Image source={require("../image/gardens.png")} style={styles.mainImage} />
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
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

function ListPage({route, navigation}: listProps){
    const {selectedValue} = route.params;
    const router = useRouter();
    const listContent = () => {
        switch(selectedValue) {
            case "waitTimes":
            return (
                <View>
                <View style={styles.listCard}>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>Cheetah Hunt</Text>
                        <Text style={styles.listSubtitle}> 30 min wait</Text>
                    </View>
                    </View>
                    <View style={styles.listCard}>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>Kumba</Text>
                        <Text style={styles.listSubtitle}> 90 min wait</Text>
                    </View>
                    </View>
                    <View style={styles.listCard}>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>Cobra's Curse</Text>
                        <Text style={styles.listClosed}> Closed</Text>
                    </View>
                    </View>
                </View>
            );
            case "attractions":
                return (
                    <View>
                        <View style={styles.listCard}>
                            <Image source={require("../image/CheetaHunt.png")} style={styles.listImage} />
                            <View style={styles.listTextContainer}>
                            <Text style={styles.listTitle}>Cheetah Hunt</Text>
                            <Text style={styles.listSubtitle}>Thrilling triple-launch roller coaster</Text>
                        </View>
                        </View>
                        <View style={styles.listCard}>
                            <Image source={require("../image/Kumba.png")} style={styles.listImage} />
                            <View style={styles.listTextContainer}>
                            <Text style={styles.listTitle}>Kumba</Text>
                            <Text style={styles.listSubtitle}>Legendary Florida steel coaster ride that roars</Text>
                         </View>
                         </View>
                        <View style={styles.listCard}>
                            <Image source={require("../image/Phoenix.png")} style={styles.listImage} />
                            <View style={styles.listTextContainer}>
                            <Text style={styles.listTitle}>Phoenix Rising</Text>
                            <Text style={styles.listSubtitle}>Experience a fiery blaze of immersive, family-friendly excitement as you soar above the Serengeti Plain and drop into fun-filled twists and turns</Text>
                        </View>
                        </View>
                    </View>
                );
                case "dining":
                    return (
                        <View>
                            <View style={styles.listCard}>
                                <Image source={require("../image/chickfila.png")} style={styles.listImage} />
                                <View style={styles.listTextContainer}>
                                <Text style={styles.listTitle}>Chick-fil-A</Text>
                                <Text style={styles.listSubtitle}>$ American</Text>
                            </View>
                            </View>
                            <View style={styles.listCard}>
                                <Image source={require("../image/zambia.png")} style={styles.listImage} />
                                <View style={styles.listTextContainer}>
                                <Text style={styles.listTitle}>Zambia Smokehouse</Text>
                                <Text style={styles.listSubtitle}>$$ American, French</Text>
                            </View>
                            </View>
                            <View style={styles.listCard}>
                                <Image source={require("../image/morrocandelights.png")} style={styles.listImage} />
                                <View style={styles.listTextContainer}>
                                <Text style={styles.listTitle}>Moroccan Delights</Text>
                                <Text style={styles.listSubtitle}>$ American, Italian</Text>
                            </View>
                            </View>
                        </View>
                    );
                    case "restrooms":
                        return (
                            <View>
                                <View style={styles.listItem}>
                                    <Text style={styles.listTitle}>Near Entrance</Text>
                                </View>
                                <View style={styles.listItem}>
                                    <Text style={styles.listTitle}>Near Iron Gwazi</Text>
                                </View>
                                <View style={styles.listItem}>
                                    <Text style={styles.listTitle}>Near Cheetah</Text>
                                </View>
                            </View>
                        );
                        case "shows":
                            return (
                                <View>
                                    <View style={styles.listCard}>
                                        <Image source={require("../image/iceshow.png")} style={styles.listImage} />
                                        <View style={styles.listTextContainer}>
                                        <Text style={styles.listTitle}>Christmas on Ice</Text>
                                        <Text style={styles.listSubtitle}>Indoor, Seasonal</Text>
                                    </View>
                                    </View>
                                    <View style={styles.listCard}>
                                        <Image source={require("../image/fireworks.png")} style={styles.listImage} />
                                        <View style={styles.listTextContainer}>
                                        <Text style={styles.listTitle}>Holiday in the Sky Fireworks Show</Text>
                                        <Text style={styles.listSubtitle}>Outdoor, Seasonal</Text>
                                    </View>
                                    </View>
                                    <View style={styles.listCard}>
                                        <Image source={require("../image/animaltales.png")} style={styles.listImage} />
                                        <View style={styles.listTextContainer}>
                                        <Text style={styles.listTitle}>Animal Tales</Text>
                                        <Text style={styles.listSubtitle}>Presentation, Indoor</Text>
                                    </View>
                                    </View>
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
                <View style={{width: "auto", alignSelf: "flex-start"}}>
                    <Text>Filter</Text>
                </View>
                <View style={styles.mainPicker}>
                    <Picker selectedValue={selectedValue} >
                        <Picker.Item label="Wait Times" value={"waitTimes"}/>
                        <Picker.Item label="Attractions" value={"attractions"}/>
                        <Picker.Item label="Dining" value={"dining"}/>
                        <Picker.Item label="Restrooms" value={"restrooms"}/>
                        <Picker.Item label="Shows" value={"shows"}/>
                    </Picker>
                </View>
                <View>
                    <TouchableOpacity style={styles.listButton} onPress={() => navigation.navigate("MainPage")}>
                        <Text style={styles.listButtonText}>Hide list</Text> 
                    </TouchableOpacity>
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
            <NestedStack.Screen name="MainPage" component={MainPage}/>
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
        mainPicker: {
            width: 150,  // Set fixed width to make it visible
            marginHorizontal: 10,  // Space it from the Filter button
            fontSize: 16,
            fontWeight: "bold",
            color: "#200082",
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
    });