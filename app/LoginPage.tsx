import { StyleSheet, View, Button, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator<RootStackParamList>();
const TabStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
    login: undefined,
    signup: undefined,
    TabScreens: undefined,
}

type loginProps = NativeStackScreenProps<RootStackParamList, "login">;
type signupProps = NativeStackScreenProps<RootStackParamList, "signup">;

function login({navigation}: loginProps){
    const router = useRouter();
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require("../image/logo.svg")}/>
            </View>

            <View style={styles.middleSection}>
                <Text>E-mail</Text>
                <TextInput placeholder="Enter email"/>
                <Text>Password</Text>
                <TextInput placeholder="Enter password"/>
                <Button title="Log in" onPress={() => router.push("/HomePage")}/>
            </View>

            <View>
                <Button title="Sign in with google"/>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>        
    );
}

function signup({navigation}: signupProps){
    const router = useRouter();
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require("../image/logo.svg")}/>
                <Text>Sign Up</Text>
            </View>

            <View style={styles.middleSection}>
                <Text>E-mail</Text>
                <TextInput placeholder="Enter E-mail"/>
                <Text>Password</Text>
                <TextInput placeholder="Enter Password"/>
                <Text>Re-Enter Password</Text>
                <TextInput placeholder="Re-Enter Password"/>
                <Button title="Sign Up" onPress={() => router.push("/HomePage")} />
            </View>

            <View>
                <Button title="Sign Up with Google"/>
            </View>
        </View>
    );
}

function TabScreens(){
    return(
        <TabStack.Navigator screenOptions={{ headerShown: false }}>
            <TabStack.Screen name="login" component={login}/>
            <TabStack.Screen name="signup" component={signup}/>
        </TabStack.Navigator>
    );
}

export default function LoginPage(){
    return(
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="TabScreens" component={TabScreens}/>
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
      //CSS for text
      signUpText: {
        color: "#310082",
        fontSize: 20,
      },
});