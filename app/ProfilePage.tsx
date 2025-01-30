import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserProfile = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.profileSection}>
        <Image
          source={require("../image/ProfilePicture.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <View style={styles.profileDetailsContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.name}>John Doe</Text>
              <TouchableOpacity>
                <Icon name="edit" color="#8E7EFE" size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.email}>john.doe@example.com</Text>
              <TouchableOpacity>
                <Icon name="edit" color="#8E7EFE" size={20} />
              </TouchableOpacity>
            </View>

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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>
        <TouchableOpacity style={styles.pMethod} onPress={() => router.push("/ChangePage")}>
          <View style={styles.buttonRow}>
            <Text style={styles.editButtonText}>Change Password</Text>
            <Icon name="edit" color="#fff" size={20} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.pMethod} onPress={() => router.push("/LoginPage")}>
          <Text style={styles.editButtonText}>Log Out</Text>
        </TouchableOpacity>

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
    paddingBottom: 100,  
    fontFamily: "Atkinson Hyperlegible",  
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: "Montserrat",  
  },

  // Profile Section
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,  
  },
  profileImage: {
    width: 120,  
    height: 120, 
    borderRadius: 60,
    marginBottom: 10,  
  },
  profileInfo: {
    alignItems: 'center',
    width: '100%', 
  },

  // Profile details container with purple border
  profileDetailsContainer: {
    width: '100%',  
    borderWidth: 2, 
    borderColor: '#8E7EFE', 
    borderRadius: 12, 
    padding: 16, 
  },

  // Info Row for name, email, phone number
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%', 
    marginBottom: 10, 
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, 
    fontFamily: "Atkinson Hyperlegible",  
  },
  email: {
    fontSize: 16,
    color: '#6b7280',
    flex: 1, 
    fontFamily: "Atkinson Hyperlegible",  
  },
  phoneNumber: {
    fontSize: 16,
    color: '#6b7280',
    flex: 1, 
    fontFamily: "Atkinson Hyperlegible",  
  },

  // Sections Styling
  section: {
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    fontFamily: "Montserrat",  
  },

  // Payment Method, Change Password, and Account buttons
  pMethod: {
    backgroundColor: '#8E7EFE', 
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    fontFamily: "Atkinson Hyperlegible",
    fontSize: 20,  
  },

  // Delete My Account Button
  deleteButton: {
    backgroundColor: '#EF4444', 
  },

  // Navbar Styling
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8E7EFE",
    height: 70,
    width: "100%",  
    position: "absolute",
    bottom: 0,
    left: 0,  
    right: 0, 
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
