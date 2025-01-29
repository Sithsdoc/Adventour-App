import React from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function PaymentPage(){
    const router = useRouter();
 
    return (
        <View style={styles.container}>
            <Text>Payment Information</Text>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#808080',
      padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
})
