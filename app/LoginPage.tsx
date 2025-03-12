import { StyleSheet, View, Button, Text, Image, TouchableOpacity, TextInput, AppState, Dimensions } from "react-native";
import React, {useState} from "react";
import { useRouter } from "expo-router";
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../utils/supabase";

const MainStack = createNativeStackNavigator<RootStackParamList>();
const TabStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
    login: undefined,
    signup: undefined,
    TabScreens: undefined,
}

type loginProps = NativeStackScreenProps<RootStackParamList, "login">;
type signupProps = NativeStackScreenProps<RootStackParamList, "signup">;


AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })

function login({navigation}: loginProps){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
    
        if (error) {
            console.log("did not work", error.message);
        } else {
            await fetchUserSession();
            router.push("/HomePage");
            console.log("Successfully logged in");
        }
        setLoading(false);
    }

    const fetchUserSession = async () => {
        const { data, error } = await supabase.auth.getSession();
    
        if (error) {
            console.log("Error fetching session:", error.message);
        } else {
            console.log("Session data:", data);
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require("../image/logo.svg")}/>
            </View>

            <View style={styles.middleSection}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} 
                placeholder="Enter your email" 
                onChangeText={(text) => setEmail(text)}
                value={email}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input}
                placeholder="Enter your password" 
                onChangeText={(text) => setPassword(text)}
                value={password}
                //secureTextEntry={true}
                 />
                <TouchableOpacity style={styles.loginButton} onPress={() => signInWithEmail()}>
                <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
            </View>


            <View>
                <TouchableOpacity style={styles.googleButton} onPress={() => router.push("/HomePage")}>
                    <Text style={styles.googleButtonText}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("signup")}>
                    <Text style={styles.signupButtonText}>Sign up</Text>
                </TouchableOpacity>
            </View>

        </View>        
    );
}

function signup({navigation}: signupProps){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function signUpWithEmail(){
        setLoading(true);
        const {
            data: {session},
            error
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if(error) {
            console.log("error", error.message)
        } else if (password == rePassword){
            router.push("/HomePage")
        }
            setLoading(false)
    }

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require("../image/logo.svg")}/>
                <Text style={styles.label}>Sign Up</Text>
            </View>

            <View style={styles.middleSection}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} 
                placeholder="Enter your email" 
                onChangeText={(text) => setEmail(text)}
                value={email}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} 
                placeholder="Enter your password" 
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true} 
                />
                <Text style={styles.label}>Re-Enter Password</Text>
                <TextInput style={styles.input} 
                placeholder="Re-Enter Password"
                onChangeText={(text) => setRePassword(text)}
                value={rePassword}
                secureTextEntry={true}
                />
                <TouchableOpacity style={styles.signButton} onPress={() => signUpWithEmail()}>
                    <Text style={styles.signButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>


            <View>
                <TouchableOpacity style={styles.googleButton} onPress={() => router.push("/HomePage")}>
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function TabScreens(){
    return(
        <TabStack.Navigator screenOptions={{ headerShown: false }}>
            <TabStack.Screen name="login" component={login}/>
            <TabStack.Screen name="signup" component={signup}/>
        </TabStack.Navigator>
    );
}

export default function LoginPage(){
    return(
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="TabScreens" component={TabScreens}/>
        </MainStack.Navigator>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#67C5ED",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: height * 0.05,
        paddingHorizontal: width * 0.05,
    },
    topSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: height * 0.03,
    },
    middleSection: {
        flex: 1,
        width: "90%",
        padding: width * 0.05,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: height * 0.02,
        alignSelf: "center",
    },
    input: {
        width: '100%',
        height: height * 0.05,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: width * 0.03,
        marginVertical: height * 0.01,
    },
    label: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: "left",
        marginTop: height * 0.02,
    },
    loginButton: {
        backgroundColor: "#310082",
        width: "100%",
        height: height * 0.06,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.02,
    },
    loginButtonText: {
        color: "#ffffff",
        fontSize: width * 0.05,
        fontWeight: "bold",
    },
    googleButton: {
        backgroundColor: '#ffffff',
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.2,
        borderRadius: 30,
        marginTop: height * 0.02,
    },
    googleButtonText: {
        color: "black",
        fontSize: width * 0.045,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signupButton: {
        backgroundColor: '#ffffff',
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.15,
        borderRadius: 30,
        marginTop: height * 0.02,
    },
    signupButtonText: {
        color: "black",
        fontSize: width * 0.045,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signButton: {
        backgroundColor: "#310082",
        width: "100%",
        height: height * 0.06,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.02,
    },
    signButtonText: {
        color: "#ffffff",
        fontSize: width * 0.05,
        fontWeight: "bold",
    },
});