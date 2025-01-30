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
    ListPage: undefined,
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

function ListPage({navigation}: listProps){
    return(
        <View style={styles.container}>

        </View>
    );
}

function MainPage({navigation}: mainProps){
    const router = useRouter();
    const [activeSections, setActiveSections] = useState<number[]>([])
    const [selectedValue, setSelectedValue] = useState("");
    const Sections = ["Filter"]

    const renderContent = () => {
        return(
        <View>
            <ThrillFilter/>
            <AgeFilter/>
            <HeightFilter/>
        </View>
    );
}

    const renderHeader = () => {
        return (
            <View>
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
                <View>
                    <Accordion 
                    activeSections={activeSections}
                    sections={Sections}
                    renderContent={renderContent}
                    renderHeader={renderHeader}
                    onChange={updateState}
                    />
                </View>
                <View>
                    <Picker selectedValue={selectedValue} onValueChange={(item) => setSelectedValue(item)}>
                        <Picker.Item label="Wait Times" value={"waitTimes"}/>
                        <Picker.Item label="Attractions" value={"attractions"}/>
                        <Picker.Item label="Dining" value={"dining"}/>
                        <Picker.Item label="Restrooms" value={"restrooms"}/>
                        <Picker.Item label="Shows" value={"shows"}/>
                    </Picker>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Show list</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.middleSection}>
                <Image source={require("../image/gardens.png")}/>
            </View>


            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton}>
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

function NestedScreens(){
    return(
        <NestedStack.Navigator screenOptions={{ headerShown: false }}>
            <NestedStack.Screen name="MainPage" component={MainPage}/>
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