import { StyleSheet, View, Button, Text, Image, TouchableOpacity } from "react-native";
import React from "react"; 
import { Picker } from '@react-native-picker/picker';
import Collapsible from 'react-native-collapsible';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Touchable } from "react-native";
import QuestionPage from "./QuestionPage";
import { useRouter } from "expo-router";

const MainStack =  createNativeStackNavigator<RootStackParamList>();
const NestedStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList ={
    MainPage: undefined,
    NestedScreens: undefined,
}

type mainProps = NativeStackScreenProps<RootStackParamList, "MainPage">;

function MainPage({navigation}: mainProps){
    return(
        <View style={styles.container}>
            <Text>The next pain in my a**</Text>
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
});