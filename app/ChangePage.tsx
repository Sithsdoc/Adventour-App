import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { supabase } from '@/utils/supabase';

export default function ChangePage() {
  const router = useRouter();

  const [ newPassword, setNewPassword ] = useState("");
  const [ confirmNewPassword, setConfirmNewPassword ] = useState("");

  async function changePassword() {
    if (!newPassword || !confirmNewPassword) {
      Alert.alert("Error", "Please fill in both passwords");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      console.error("Error changing password: ", error);
      Alert.alert("Error", error.message);
    }
    else {
      Alert.alert("Success", "Password changed successfully");
      router.push("/ProfilePage");
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/ProfilePage")}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Change Password</Text>
      </View>

      <View style={styles.passwordSection}>
        <Text style={styles.formLabel}>New Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={newPassword} onChangeText={setNewPassword} />

        <Text style={styles.formLabel}>Confirm New Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={confirmNewPassword} onChangeText={setConfirmNewPassword} />

        <TouchableOpacity style={styles.saveButton} onPress={changePassword}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Montserrat',  
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    color: "#000000",
    fontSize: 30,
  },
  formLabel: {
    fontSize: 18,
    fontFamily: 'Atkinson Hyperlegible',  
    fontWeight: 'bold',
    color: '#6b7280',
    marginVertical: 8,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#d1d5db', 
  },
  passwordSection: {
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#8E7EFE', 
  },
  saveButton: {
    alignSelf: 'center',
    backgroundColor: '#310082',
    borderRadius: 8,
    paddingHorizontal: 98,  
    paddingVertical: 12,   
    marginTop: 20, 
  },
  saveButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat', 
    fontSize: 24,  
    fontWeight: 'bold',
    textAlign: 'center',  
  },
});
