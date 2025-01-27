import { StyleSheet, View, Button, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

export default function LoginPage(){
        const router = useRouter();
    return(
        <View style={styles.container}>
            <Text>testing screen</Text>
            <Button title="go to homepage" onPress={() => router.push("/HomePage")}/>
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
});