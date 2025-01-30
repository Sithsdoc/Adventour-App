import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserProfile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {/* Profile Image Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("../image/ProfilePicture.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          {/* Section with purple stroke around name, email, and phone */}
          <View style={styles.profileDetailsContainer}>
            {/* Name Section */}
            <View style={styles.infoRow}>
              <Text style={styles.name}>John Doe</Text>
              <TouchableOpacity>
                <Icon name="edit" color="#8E7EFE" size={20} />
              </TouchableOpacity>
            </View>
          
            {/* Email Section */}
            <View style={styles.infoRow}>
              <Text style={styles.email}>john.doe@example.com</Text>
              <TouchableOpacity>
                <Icon name="edit" color="#8E7EFE" size={20} />
              </TouchableOpacity>
            </View>

            {/* Phone Number Section */}
            <View style={styles.infoRow}>
              <Text style={styles.phoneNumber}>+300 254 7895</Text>
              <TouchableOpacity>
                <Icon name="edit" color="#8E7EFE" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Information</Text>
        <TouchableOpacity style={styles.pMethod} onPress={() => router.push("/PaymentPage")}>
          <View style={styles.buttonRow}>
            <Text style={styles.editButtonText}>Manage Payment Method</Text>
            <Icon name="edit" color="#fff" size={20} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Security Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>
        <TouchableOpacity style={styles.pMethod} onPress={() => router.push("/ChangePage")}>
          <View style={styles.buttonRow}>
            <Text style={styles.editButtonText}>Change Password</Text>
            <Icon name="edit" color="#fff" size={20} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.pMethod} onPress={() => router.push("/LoginPage")}>
          <Text style={styles.editButtonText}>Log Out</Text>
        </TouchableOpacity>

        {/* Delete My Account button now below Log Out button */}
        <TouchableOpacity style={[styles.pMethod, styles.deleteButton]} onPress={() => router.push("/LoginPage")}>
          <Text style={styles.editButtonText}>Delete My Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/HomePage")}>
          <Icon name="home" color="#C8A6FF" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/QuestionPage")}>
          <Icon name="assignment" color="#C8A6FF" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/MapPage")}>
          <Icon name="place" color="#C8A6FF" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
          <Icon name="account-circle" color="#C8A6FF" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function ProfilePage() {
  return <UserProfile />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },

  // Profile Section
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,  // Adds space below the profile section
  },
  profileImage: {
    width: 120,  // Adjust size for better appearance
    height: 120, // Adjust size for better appearance
    borderRadius: 60,
    marginBottom: 10,  // Adds space between image and text
  },
  profileInfo: {
    alignItems: 'center',
    width: '100%', // Ensures full width for the profile info container
  },
  
  // Profile details container with purple border
  profileDetailsContainer: {
    width: '100%',  // Full width container
    borderWidth: 2, // Adds a border
    borderColor: '#8E7EFE', // Purple border
    borderRadius: 12, // Rounded corners
    padding: 16, // Padding inside the container
  },

  // Info Row for name, email, phone number
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Spaces out the text and the edit icon
    alignItems: 'center',
    width: '100%', // Full width to ensure the items are spaced out properly
    marginBottom: 10, // Adds space between rows
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Ensures name takes up remaining space
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
    flex: 1, // Ensures email takes up remaining space
  },
  phoneNumber: {
    fontSize: 14,
    color: '#6b7280',
    flex: 1, // Ensures phone number takes up remaining space
  },

  // Sections Styling
  section: {
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },

  // Payment Method, Change Password, and Account buttons
  pMethod: {
    backgroundColor: '#8E7EFE', // Purple theme
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Delete My Account Button
  deleteButton: {
    backgroundColor: '#EF4444', // Red background for Delete button
  },

  // Navbar Styling
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8E7EFE", // Purple theme
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
