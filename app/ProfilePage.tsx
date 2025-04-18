import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, TextInput, Dimensions, ScrollView, Alert, Platform } from 'react-native';
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { supabase } from '@/utils/supabase';
import * as ImagePicker from 'expo-image-picker';

interface userProfile {
  auth_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  payment_method: string;
  profile_picture: string | null;
}

const UserProfile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<userProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPhoneNumber, setEditingPhoneNumber] = useState(false);

  useEffect(() => {
    fetchUserData();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
          fetchUserData();
      }
  });

  return () => {
      authListener.subscription.unsubscribe();
  };
  }, []);

  const fetchUserData = async () => {
    setLoading(true);

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("Error fetching user: ", authError);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("Users")
      .select("*")
      .eq("auth_id", user.id)
      .single();

    if (error) {
      console.error("Error fetching user data: ", error);
      setLoading(false);
      return;
    }
    
    setUserData({...data, email: user.email });
    setProfilePic(data.profile_picture || "https://dixcsqbokxonnpkeptts.supabase.co/storage/v1/object/public/profile-pictures/please_work.png")
    setFirstName(data.first_name || "First Name");
    setLastName(data.last_name || "Last Name");
    setEmail(user.email || "Email");
    setPhoneNumber(data.phone_number || "Phone Number");
    setLoading(false);
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#8E7EFE" />;
  }

  const editProfilePic = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
      await saveProfilePic(result.assets[0].uri);
    }
  };

  async function saveProfilePic(uri) {
    try {
      const fileExt = uri.split('.').pop();
      const fileName = `${userData?.auth_id}.${fileExt}`;
      const formData = new FormData();
      formData.append("file", {
        uri: uri,
        name: fileName,
        type: `image/${fileExt}`,
      });

      let oldFileName = null;
      if (userData?.profile_picture !== "https://dixcsqbokxonnpkeptts.supabase.co/storage/v1/object/public/profile-pictures/please_work.png") {
        const urlParts = userData.profile_picture.split('/');
        oldFileName = urlParts[urlParts.length - 1];
      }

      if (oldFileName && oldFileName !== fileName) {
        const { error: deleteError } = await supabase.storage.from('profile-pictures').remove([oldFileName]);

        if (deleteError) {
          console.warn("Old file deletion failed: ", deleteError.message);
        }
        else {
          console.log("Old file deletion successful: ", oldFileName);
        }
      }

      const { data, error } = await supabase.storage
        .from('profile-pictures')
        .upload(fileName, formData, {
          contentType: `image/${fileExt}`,
          upsert: true
        });
      
      if (error) {console.log("image upload error"); throw error;};

      const { data: publicUrl } = supabase.storage.from('profile-pictures').getPublicUrl(fileName);

      const { error: updateError } = await supabase
        .from('Users')
        .update({ profile_picture: publicUrl.publicUrl })
        .eq('auth_id', userData?.auth_id);

      if (updateError) {console.log("database update error"); throw  updateError;};

      Alert.alert("Success", "Profile picture updated!");
    }
    catch (error) {
      console.error("Profile pic upload error: ", error.message);
      console.error("Full error details:", error);
      Alert.alert("Profile pic upload error: ", error.message);
    }
  }

  function editName() {
    if (firstName === "First Name") {
      setFirstName("")
    }
    if (lastName === "Last Name") {
      setLastName("")
    }

    setEditingName(true);
  }

  async function saveName() {
    const { error } = await supabase
      .from("Users")
      .update({first_name: firstName, last_name: lastName})
      .eq("auth_id", userData?.auth_id);

    if (error) {
      console.error("Error saving name: ", error);
    }
    else {
      console.log("New name uploaded to database");
      setUserData((prev) => prev ? { ...prev, first_name: firstName, last_name: lastName } : null);
      setEditingName(false);
    }
  }

  function editEmail() {
    if (email === "Email") {
      setEmail("")
    }

    setEditingEmail(true);
  }

  async function saveEmail() {
    const { data, error } = await supabase.auth.updateUser({
      email: email,
    });

    if (error) {
      console.error("Error updating email: ", error);
    }
    else {
      console.log("Email update begun. User must confirm via link in email");
      setUserData((prev) => prev ? { ...prev, email: email } : null);
      setEditingEmail(false);
    }
  }

  function editPhoneNumber() {
    if (phoneNumber === "Phone Number") {
      setPhoneNumber("")
    }

    setEditingPhoneNumber(true);
  }

  const handlePhoneNumber = (text: string) => {
    const numbersOnly = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numbersOnly);
  }

  async function savePhoneNumber() {
    const { error } = await supabase
      .from("Users")
      .update({phone_number: phoneNumber})
      .eq("auth_id", userData?.auth_id);

    if (error) {
      console.error("Error saving phone number: ", error);
    }
    else {
      console.log("New phone number uploaded to database");
      setUserData((prev) => prev ? { ...prev, phone_number: phoneNumber } : null);
      setEditingPhoneNumber(false);
    }
  }

  async function handleDeleteAccount() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout failed: ", error.message);
    }
    router.replace("/LoginPage");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.profileSection}>
        <Image
          source={{uri: profilePic}}
          style={styles.profileImage}
        />
        <TouchableOpacity onPress={() => editProfilePic()}>
          <Icon name="edit" color="#8E7EFE" size={20} />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          <View style={styles.profileDetailsContainer}>
            <View style={styles.infoRow}>
              { editingName ? (
                <>
                  <TextInput style={styles.input} placeholder="Given Name" value={firstName} onChangeText={setFirstName} />
                  <TextInput style={styles.input} placeholder="Family Name" value={lastName} onChangeText={setLastName} />
                  <TouchableOpacity onPress={() => saveName()}>
                    <Icon name="check" color="#4CAF50" size={20} />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.name}>{firstName} {lastName}</Text>
                  <TouchableOpacity onPress={() => editName()}>
                    <Icon name="edit" color="#8E7EFE" size={20} />
                  </TouchableOpacity>
                </>
              )}
            </View>

            <View style={styles.infoRow}>
              { editingEmail ? (
                <>
                  <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" value={email} onChangeText={setEmail} />
                  <TouchableOpacity onPress={() => saveEmail()}>
                    <Icon name="check" color="#4CAF50" size={20} />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.email}>{email}</Text>
                  <TouchableOpacity onPress={() => editEmail()}>
                    <Icon name="edit" color="#8E7EFE" size={20} />
                  </TouchableOpacity>
                </>
              )}
            </View>

            <View style={styles.infoRow}>
              { editingPhoneNumber ? (
                <>
                  <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={phoneNumber} onChangeText={handlePhoneNumber} />
                  <TouchableOpacity onPress={() => savePhoneNumber()}>
                    <Icon name="check" color="#4CAF50" size={20} />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                  <TouchableOpacity onPress={() => editPhoneNumber()}>
                    <Icon name="edit" color="#8E7EFE" size={20} />
                  </TouchableOpacity>
                </>
              ) }
            </View>
          </View>
        </View>
      </View>
      
      {/*
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Information</Text>
        <TouchableOpacity style={styles.pMethod} onPress={() => router.navigate("/PaymentPage")}>
          <View style={styles.buttonRow}>
            <Text style={styles.editButtonText}>Manage Payment Method</Text>
            <Icon name="edit" color="#fff" size={20} />
          </View>
        </TouchableOpacity>
      </View>
      */}

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
        <TouchableOpacity style={styles.pMethod} onPress={async () => {
          const { error } = await supabase.auth.signOut();
          if (error) {
            console.error("Logout failed: ", error.message);
          }
          else {
            router.replace("/LoginPage");
          }
          }}>
          <Text style={styles.editButtonText}>Log Out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.pMethod, styles.deleteButton]} onPress={handleDeleteAccount}>
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

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.12, // Ensures navbar does not overlap content
    justifyContent: "space-between", // Distributes sections evenly
  },
  header: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.02,
    fontFamily: "Montserrat",
  },
  profileSection: {
    alignItems: "center",
    flexShrink: 1, // Allows section to shrink on smaller screens
    marginBottom: height * 0.02,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
  },
  profileInfo: {
    alignItems: "center",
    width: "100%",
    flexShrink: 1,
  },
  profileDetailsContainer: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#8E7EFE",
    borderRadius: 12,
    padding: width * 0.03,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  name: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    flexShrink: 1,
    fontFamily: "Atkinson Hyperlegible",
  },
  email: {
    fontSize: width * 0.035,
    color: "#6b7280",
    flexShrink: 1,
    fontFamily: "Atkinson Hyperlegible",
  },
  phoneNumber: {
    fontSize: width * 0.035,
    color: "#6b7280",
    flexShrink: 1,
    fontFamily: "Atkinson Hyperlegible",
  },
  section: {
    flexShrink: 1, // Prevents sections from taking too much space
    maxHeight: height * 0.18, // Ensures sections don’t overflow
  },
  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Montserrat",
  },
  pMethod: {
    backgroundColor: "#8E7EFE",
    borderRadius: 8,
    paddingVertical: height * 0.008, // Reduce padding to fit smaller screens
    marginTop: height * 0.005,
    flexWrap: "wrap",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Atkinson Hyperlegible",
    fontSize: width * 0.04,
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#EF4444",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8E7EFE",
    height: height * 0.08,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: height * 0.015, // Prevents overlap with content
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    width: "100%",
    height: height * 0.05,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    paddingHorizontal: width * 0.03,
    marginVertical: height * 0.005,
  },
});