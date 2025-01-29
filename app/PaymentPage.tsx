import React from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PaymentPage(){
    const router = useRouter();
 
    return (
        <View style={styles.container}>
          <View>
                        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/ProfilePage")}>
                          <Icon name="arrow-back" style={styles.backIcon}/>
                        </TouchableOpacity>
                      </View>
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
      backButton: {
        position: "absolute",
        left: 20,
        top: 40,
      },
      backIcon: {
        color: "#000000",
        fontSize: 30,
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
