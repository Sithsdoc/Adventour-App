import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { supabase } from '@/utils/supabase';

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

  const [editingProfilePic, setEditingProfilePic] = useState(false);
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

  function editProfilePic() {

  }

  async function saveProfilePic() {

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
    setEditingEmail(false);
  }

  function editPhoneNumber() {
    if (phoneNumber === "Phone Number") {
      setPhoneNumber("")
    }

    setEditingPhoneNumber(true);
  }

  const handlePhoneNumber = (text) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.profileSection}>
        <Image
          source={{uri: profilePic}}
          style={styles.profileImage}
        />
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
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
},
});
