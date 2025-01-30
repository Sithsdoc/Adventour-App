import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ChangePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Section with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/ProfilePage")}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Change Password</Text>
      </View>

      {/* Change Password Section with Purple Stroke */}
      <View style={styles.passwordSection}>
        <Text style={styles.formLabel}>Current Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} />

        <Text style={styles.formLabel}>New Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} />

        <Text style={styles.formLabel}>Confirm New Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} />

        {/* Save Changes Button inside the same section */}
        <TouchableOpacity style={styles.saveButton}>
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
    fontSize: 16,
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
    borderColor: '#d1d5db', // Light gray border for input fields
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
    borderWidth: 2, // Purple border
    borderColor: '#8E7EFE', // Purple color for the border
  },
  saveButton: {
    alignSelf: 'center',
    backgroundColor: '#310082',
    borderRadius: 8,
    paddingHorizontal: 125,
    paddingVertical: 8,
    marginTop: 20, // Add some space between the inputs and the button
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
