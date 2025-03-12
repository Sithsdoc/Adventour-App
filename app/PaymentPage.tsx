import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
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
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/ProfilePage")} >
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

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: width * 0.04,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    header: {
        fontSize: width * 0.06,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        textAlign: 'center', 
        flex: 1,
    },
    backButton: {
      position: 'absolute',
      left: width * 0.02,
      width: width * 0.08, // Make it fit the icon exactly
      height: width * 0.08, // Square shape matching the icon
      justifyContent: 'center',
      alignItems: 'center',
  },
  
  backIcon: {
      color: "#000000",
      fontSize: width * 0.08,
  },
    passwordSection: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: width * 0.04,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 2,
        borderColor: '#8E7EFE',
        marginTop: height * 0.02,
    },
    formLabel: {
        fontSize: width * 0.045,
        fontFamily: 'Atkinson Hyperlegible',
        fontWeight: 'bold',
        color: '#6b7280',
        marginVertical: height * 0.01,
    },
    savedPaymentMethodSection: {
        marginTop: height * 0.05,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: width * 0.04,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 2,
        borderColor: '#8E7EFE',
    },
    savedPaymentMethodTitle: {
        fontSize: width * 0.05,
        fontFamily: 'Atkinson Hyperlegible',
        fontWeight: 'bold',
        marginBottom: height * 0.02,
    },
    savedCardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    savedCardText: {
        fontSize: width * 0.05,
        color: '#6b7280',
        fontFamily: 'Atkinson Hyperlegible',
    },
    editIcon: {
        padding: width * 0.01,
    },
    expiryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    trashIcon: {
        padding: width * 0.01,
    },
    addPaymentCardButton: {
        alignSelf: 'center',
        backgroundColor: '#310082',
        borderRadius: 8,
        paddingHorizontal: width * 0.25,
        paddingVertical: height * 0.015,
        marginTop: height * 0.03,
    },
    addPaymentCardButtonText: {
        color: '#fff',
        fontFamily: 'Montserrat',
        fontSize: width * 0.06,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: height * 0.06,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: width * 0.03,
        marginVertical: height * 0.01,
        borderWidth: 1,
        borderColor: '#d1d5db',
    },
    saveButton: {
        alignSelf: 'center',
        backgroundColor: '#310082',
        borderRadius: 8,
        paddingHorizontal: width * 0.25,
        paddingVertical: height * 0.015,
        marginTop: height * 0.03,
    },
    saveButtonText: {
        color: '#fff',
        fontFamily: 'Montserrat',
        fontSize: width * 0.06,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollViewContent: {
        flexGrow: 1, 
        justifyContent: 'flex-start',
        paddingTop: height * 0.01,
    },
    navbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#8E7EFE",
        height: height * 0.1,
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
 