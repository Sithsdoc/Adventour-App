import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PaymentPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Section with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/ProfilePage")}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Payment Information</Text>
      </View>

      {/* Saved Payment Method Section */}
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

      {/* Add Payment Card Button below Saved Payment Method Section */}
      <TouchableOpacity style={styles.addPaymentCardButton}>
        <Text style={styles.addPaymentCardButtonText}>Add Payment Card</Text>
      </TouchableOpacity>
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
    textAlign: 'left',
    marginLeft: 10, // Adjust space between back icon and title
    flex: 1,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    color: "#000000",
    fontSize: 30,
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
    fontWeight: 'bold',
    marginBottom: 16, // Added margin to create space between title and card info
  },
  savedCardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures the card number and the icons are at opposite ends
    alignItems: 'center',
    marginBottom: 16,
  },
  savedCardText: {
    fontSize: 16,
    color: '#6b7280',
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
    paddingHorizontal: 125,
    paddingVertical: 12,
    marginTop: 20, 
  },
  addPaymentCardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});