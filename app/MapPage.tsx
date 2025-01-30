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

function ThrillFilter(){
    return(
    <View>
        <View>
            <Text>Thrill factor</Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Big Drops</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Small Drops</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Thrill Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Slow Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Water Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Animal Encounters</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

function AgeFilter(){
    return(
    <View>
        <View>
            <Text>Age</Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Preschoolers</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Kids</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Teenagers</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Adults</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>All Ages</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

function HeightFilter(){
    return(
        <View>
            <View>
                <Text>Height</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>32"(82cm)</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>35"(89cm)</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>38"(97cm)</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>40"(102cm)</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>42"(107cm)</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>44"(113cm)</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>48"(122cm)</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>All Height</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


function MainPage({navigation}: mainProps){
    const router = useRouter();
    const [activeSections, setActiveSections] = useState<number[]>([])
    const [selectedValue, setSelectedValue] = useState("waitTimes");
    const Sections = ["Filter"]

    const renderContent = () => {
        return(
        <View style={styles.dropdownContainer}>
            <ThrillFilter/>
            <AgeFilter/>
            <HeightFilter/>
        </View>
    );
}

    const renderHeader = () => {
        return (
            <View style={styles.filterButton}>
                <Text>Filter</Text>
            </View>
        );
    }

    const updateState = (sections: number[]) => {
        setActiveSections(sections);
    }
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View >
                    <Accordion 
                    activeSections={activeSections}
                    sections={Sections}
                    renderContent={renderContent}
                    renderHeader={renderHeader}
                    onChange={updateState}
                    />
                </View>
                <View style={styles.picker}>
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
                        <Text>Show list</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.middleSection}>
                <Image source={require("../image/gardens.png")} />
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
    const [activeSections, setActiveSections] = useState<number[]>([])
    const Sections = ["Filter"]
    const router = useRouter();
    const listContent = () => {
        switch(selectedValue) {
            case "waitTimes":
                return(
                    <View>
                        <View>
                            <Text>Cheetah Hunt</Text>
                            <Text> 30 min wait</Text>
                        </View>
                        <View>
                            <Text>Kumba</Text>
                            <Text>90 min wait</Text>
                        </View>
                        <View>
                            <Text>Corbra's Curse</Text>
                            <Text>Closed</Text>
                        </View>
                    </View>
                );
            case "attractions":
                return(
                    <View>
                        <View>
                            <Text>Cheetah Hunt</Text>
                            <Text>Thrilling triple-launch roller coaster</Text>
                        </View>
                        <View>
                            <Text>Kumba</Text>
                            <Text>Legendary Florida steel coaster ride that roars</Text>
                         </View>
                        <View>
                            <Text>Pheonix Rising</Text>
                            <Text>Experience a fiery blaze of immersive, family-friendly excitement as you soar above the Serengeti Plain and drop into fun-filled twists and turns</Text>
                        </View>
                    </View>
                );
            case "dining":
                return(
                    <View>
                        <View>
                            <Text>Chick-fil-A</Text>
                            <Text>$ American</Text>
                        </View>
                        <View>
                            <Text>Zambia Smokehouse</Text>
                            <Text>$$ American, French</Text>
                        </View>
                        <View>
                            <Text>Moroccan Delights</Text>
                            <Text>$ American, Italian</Text>
                        </View>
                    </View>
                );
            case "restrooms":
                return(
                    <View>
                        <View>
                            <Text>Near Entrance</Text>
                        </View>
                        <View>
                            <Text>Near Iron Gwazi</Text>
                        </View>
                        <View>
                            <Text>Near Cheetah</Text>
                        </View>
                    </View>
                );
            case "shows":
                return(
                    <View>
                        <View>
                            <Text>Christmas on Ice</Text>
                            <Text>Indoor, Seasonal</Text>
                        </View>
                        <View>
                            <Text>Holiday in the Sky Fireworks Show</Text>
                            <Text>Outdoor, Seasonal</Text>
                        </View>
                        <View>
                            <Text>Animal Tales</Text>
                            <Text>Presentation, Indoor</Text>
                        </View>
                    </View>
                );
            default:
                return(
                    <Text>No vlaue selected</Text>
                );
        }
    }

    const renderContent = () => {
        return(
        <View style={styles.dropdownContainer}>
            <ThrillFilter/>
            <AgeFilter/>
            <HeightFilter/>
        </View>
    );
}

    const renderHeader = () => {
        return (
            <View style={styles.filterButton}>
                <Text>Filter</Text>
            </View>
        );
    }

    const updateState = (sections: number[]) => {
        setActiveSections(sections);
    }

    return(
        <View style={styles.container}>

            <View style={styles.topSection}>
                <View >
                    <Accordion 
                    activeSections={activeSections}
                    sections={Sections}
                    renderContent={renderContent}
                    renderHeader={renderHeader}
                    onChange={updateState}
                    />
                </View>
                <View style={styles.picker}>
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
                        <Text>Show list</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.middleSection}>
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
      justifyContent: "space-between",
      flexDirection: "row",
      paddingTop: 10,
      paddingHorizontal: 10,
      zIndex: 10,
      width: "100%",
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
    //picker, collapsible, and list css
    filterButton: {
        flex: 1,
        alignItems: "flex-start",
        position: "absolute",
    },
    picker: {
        flex: 2,
        alignItems: "center",
    },
    listButton: {
        flex: 1,
        alignItems: "flex-end",
    },
    dropdownContainer: {
        //position: 'absolute',
        top: 50, 
        left: 10,
        right: 10,
        zIndex: 1000, 
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, 
      },
      //css for image
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },
    //navbar css
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