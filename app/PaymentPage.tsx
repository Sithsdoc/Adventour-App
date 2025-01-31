import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  OverviewPage: undefined,
  EnterPage: undefined,
  NestedScreens: undefined,
};

type overviewProps = NativeStackScreenProps<RootStackParamList, "OverviewPage">;
type enterProps = NativeStackScreenProps<RootStackParamList, "EnterPage">;

const MainStack = createNativeStackNavigator<RootStackParamList>();
const NestedStack = createNativeStackNavigator<RootStackParamList>();

function OverviewPage({ navigation }: overviewProps) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/ProfilePage")}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Payment Information</Text>
      </View>

      <View style={styles.savedPaymentMethodSection}>
        <Text style={styles.savedPaymentMethodTitle}>Saved Payment Method</Text>
        <View style={styles.savedCardInfo}>
          <Text style={styles.savedCardText}>**** **** **** 2584</Text>
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="edit" size={24} color="#8E7EFE" />
          </TouchableOpacity>
        </View>
        <View style={styles.expiryContainer}>
          <Text style={styles.savedCardText}>Expires: 04/26</Text>
          <TouchableOpacity style={styles.trashIcon}>
            <Icon name="delete" size={24} color="#8E7EFE" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.addPaymentCardButton} onPress={() => navigation.navigate("EnterPage")}>
        <Text style={styles.addPaymentCardButtonText}>Add Payment Card</Text>
      </TouchableOpacity>
    </View>
  );
}

function EnterPage({ navigation }: enterProps) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("OverviewPage")}>
                <Icon name="arrow-back" style={styles.backIcon} />
              </TouchableOpacity>
      <Text style={styles.header}>Add Payment Card</Text>

      {/* ScrollView with contentContainerStyle set to ensure form stays at the top */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Form Section */}
        <View style={styles.passwordSection}>
          <TextInput style={styles.formLabel} placeholder="Card Number" keyboardType="numeric" />
          <TextInput style={styles.formLabel} placeholder="Cardholder Name" />
          <TextInput style={styles.formLabel} placeholder="Expiry Date" keyboardType="numeric" />
          <TextInput style={styles.formLabel} placeholder="CVV" keyboardType="numeric" secureTextEntry />
          <TouchableOpacity style={styles.saveButton} onPress={() => router.push("/ProfilePage")}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


    </View>
  );
}

function NestedScreens() {
  return (
    <NestedStack.Navigator screenOptions={{ headerShown: false }}>
      <NestedStack.Screen name="OverviewPage" component={OverviewPage} />
      <NestedStack.Screen name="EnterPage" component={EnterPage} />
    </NestedStack.Navigator>
  );
}

export default function PaymentPage() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="NestedScreens" component={NestedScreens} />
    </MainStack.Navigator>
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
    position: 'absolute', 
    left: 10,
  },
  backIcon: {
    color: "#000000",
    fontSize: 30,
  },
  passwordSection: {
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
    marginTop: 0, 
  },
  formLabel: {
    fontSize: 18,
    fontFamily: 'Atkinson Hyperlegible',
    fontWeight: 'bold',
    color: '#6b7280',
    marginVertical: 8,
  },
  savedPaymentMethodSection: {
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
  savedPaymentMethodTitle: {
    fontSize: 18,
    fontFamily: 'Atkinson Hyperlegible',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  savedCardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  savedCardText: {
    fontSize: 20,
    color: '#6b7280',
    fontFamily: 'Atkinson Hyperlegible',
  },
  editIcon: {
    padding: 4,
  },
  expiryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  trashIcon: {
    padding: 4,
  },
  addPaymentCardButton: {
    alignSelf: 'center',
    backgroundColor: '#310082',
    borderRadius: 8,
    paddingHorizontal: 90,
    paddingVertical: 12,
    marginTop: 20,
  },
  addPaymentCardButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 'bold',
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
  // Adjust ScrollView content style
  scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'flex-start',
    paddingTop: 0, 
  },
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
