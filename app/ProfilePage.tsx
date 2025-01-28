import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <View style={styles.profileCard}>
  <Image
    source={{ uri: 'https://via.placeholder.com/150' }}
    style={styles.profileImage}
  />
  <View style={styles.profileInfo}>
    <Text style={styles.name}>John Doe</Text>
    <Text style={styles.email}>john.doe@example.com</Text>
    <Text style={styles.memberSince}>Member since: January 2023</Text>
  </View>
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
    backgroundColor: '#f4f4f5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  
});

export default UserProfile;
