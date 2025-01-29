import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';


const UserProfile = () => {
      const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
    <View>
        <Image
          source={require("../image/profileDefault.jpg")} 
          style={styles.profileImage}
        />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <Text style={styles.memberSince}>Member since: January 2023</Text>
      </View>
      <View style={styles.settingsSection}>
  <Text style={styles.settingsHeader}>Account Settings</Text>
  <View style={styles.settingRow}>
    <Text style={styles.settingLabel}>Full Name</Text>
    <Text style={styles.settingValue}>John Doe</Text>
  </View>
  <View style={styles.settingRow}>
    <Text style={styles.settingLabel}>Email</Text>
    <Text style={styles.settingValue}>john.doe@example.com</Text>
  </View>
  <View style={styles.settingRow}>
    <Text style={styles.settingLabel}>Phone Number</Text>
    <Text style={styles.settingValue}>+1 234 567 8930</Text>
  </View>
  <View style={styles.settingRow}>
    <Text style={styles.settingLabel}>Preferred Language</Text>
    <Text style={styles.settingValue}>English</Text>
  </View>
</View>
<TouchableOpacity style={styles.editButton}>
  <Text style={styles.editButtonText}>Edit</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.pMethod} onPress={() => router.push("/PaymentPage")}>
    <Text style={styles.editButtonText}>Manage Payment Method</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.pMethod}>
    <Text style={styles.editButtonText}>Change Password</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.pMethod} onPress={() => router.push("/LoginPage")}>
    <Text style={styles.editButtonText} >Delete My Account</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.pMethod}>
    <Text style={styles.editButtonText} onPress={() => router.push("/LoginPage")}>Log Out</Text>
</TouchableOpacity>

    </View>

        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="home" color="#C8A6FF" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="assignment" color="#C8A6FF" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="place" color="#C8A6FF" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push("/ProfilePage")}>
            <Icon name="account-circle" color="#C8A6FF" size={30}/>
          </TouchableOpacity>
        </View>
        
    </View>
  );
};


export default function ProfilePage(){
    return(
        <UserProfile/>
    )
}


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
  //Profile Card Css
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  memberSince: {
    fontSize: 14,
    color: '#6b7280',
  },
  //setttings css
  settingsSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  settingsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  settingLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  settingValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  //Edit button css
  editButton: {
    alignSelf: 'flex-end',
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
  //Buttons css
  pMethod:{
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
  },
  //navbar css
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8E7EFE",
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


