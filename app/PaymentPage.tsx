import React from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function PaymentPage(){
    const router = useRouter();
 
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Payment Information</Text>
            <Text>Card Information</Text>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
        
            <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#808080',
      padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
      },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    editButton: {
        alignSelf: 'center',
        backgroundColor: '#3b82f6',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 16,
      },
      editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
})
