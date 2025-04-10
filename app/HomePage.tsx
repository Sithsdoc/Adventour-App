import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
     
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.topSection}>
          <Image
            source={require("../image/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        
        <View style={styles.separator} />

        
        <View style={styles.middleSection}>
          <Text style={styles.titleText}>Upcoming Events</Text>
          <View style={styles.box}>
            <Text style={styles.boxText}>Iron Gwazi</Text>
            <Text style={styles.boxTime}>Arrive at 9:30AM</Text>

            <TouchableOpacity style={[styles.button, styles.detailsButton]}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.directionsButton]}>
              <Text style={styles.buttonText}>Directions</Text>
            </TouchableOpacity>
          </View>
        </View>

       
        <View style={styles.separator} />

      
        <View style={styles.middleSection}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/HistoryPage")}
            >
              <Icon name="history" size={width * 0.08} color="#310082" />
              <Text style={styles.iconText}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/ReminderPage")}
            >
              <Icon name="notifications" size={width * 0.08} color="#310082" />
              <Text style={styles.iconText}>Reminder</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/MapPage")}
            >
              <Icon name="event" size={width * 0.08} color="#310082" />
              <Text style={styles.iconText}>Shows/Events</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/MapPage")}
            >
              <Icon name="restaurant" size={width * 0.08} color="#310082" />
              <Text style={styles.iconText}>Dining</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/MapPage")}
            >
              <Icon name="accessible" size={width * 0.08} color="#310082" />
              <Text style={styles.iconText}>Accessibility</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/MapPage")}
            >
              <Icon name="attractions" size={width * 0.08} color="#310082" />
              <Text style={styles.iconText}>Top Rides</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.equalButton}
              onPress={() => router.push("/QuestionPage")}
            >
              <Text style={styles.buttonText}>Start Planning</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.equalButton}
              onPress={() => router.push("/MapPage")}
            >
              <Text style={styles.buttonText}>View Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navbar (fixed) */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" color="#C8A6FF" size={width * 0.08} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/QuestionPage")}
        >
          <Icon name="assignment" color="#C8A6FF" size={width * 0.08} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/MapPage")}
        >
          <Icon name="place" color="#C8A6FF" size={width * 0.08} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/ProfilePage")}
        >
          <Icon name="account-circle" color="#C8A6FF" size={width * 0.08} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** Scrollable content container style */
  scrollContent: {
    alignItems: "center",
    paddingBottom: "10%", // Add some bottom padding to avoid content being hidden by the navbar
  },

  /** Top Section */
  topSection: {
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
  },
  logo: {
    width: "80%",          // 80% of the screen width
    aspectRatio: 370 / 190, // Keep original logo ratio
    marginBottom: "5%",
  },

  /** Middle Section */
  middleSection: {
    width: "90%",
    alignItems: "center",
    marginVertical: "3%",
  },
  titleText: {
    fontWeight: "bold",
    color: "#310082",
    fontSize: width * 0.06, // e.g. 6% of screen width
    textAlign: "center",
    marginBottom: "3%",
  },
  box: {
    width: "100%",
    backgroundColor: "#310082",
    padding: "5%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: "3%",
  },
  boxText: {
    fontWeight: "bold",
    fontSize: width * 0.045,
    color: "#FFFFFF",
    textAlign: "center",
  },
  boxTime: {
    fontSize: width * 0.035,
    color: "#FFFFFF",
    marginBottom: "5%",
  },

  /** Buttons */
  button: {
    backgroundColor: "#310082",
    height: 50,
    width: "80%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3%",
  },
  detailsButton: {
    backgroundColor: "#8E7EFE",
  },
  directionsButton: {
    backgroundColor: "#8E7EFE",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },

  /** Row layout for icons and action buttons */
  row: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: "5%",
  },
  iconButton: {
    flex: 1,
    alignItems: "center",
  },
  iconText: {
    marginTop: "5%",
    fontSize: width * 0.03,
    textAlign: "center",
  },
  equalButton: {
    backgroundColor: "#310082",
    height: 50,
    width: "40%",      // each button about 40%, so two fit side by side
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "2%",
  },

  /** Separator line */
  separator: {
    width: "90%",
    height: 1,
    backgroundColor: "#8E7EFE",
    marginVertical: "3%",
  },

  /** Bottom navigation bar */
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8E7EFE",
    width: "100%",
    height: "8%",      // 8% of screen height for the nav
    position: "absolute",
    bottom: 0,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
