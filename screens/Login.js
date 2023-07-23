import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firestoreDB } from "../config/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { SET_USER } from "../context/actions/userActions";

const BgImg = require("../assets/images/bg.png");
const Logo = require("../assets/images/logo.png");

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (emailValidation && email !== "") {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
        console.log("User ID", userCredential?.user.uid);
          if (userCredential) {
            getDoc(doc(firestoreDB, "users", userCredential?.user.uid)).then(
              (docSnap) => {
                if (docSnap.exists()) {
                  console.log("user data : ", docSnap.data());
                  dispatch(SET_USER(docSnap.data()));
                  navigation.replace("Home");
                } else {
                  Alert.alert("User errer");
                }
              }
            );
          }
        })
        .catch((err) => {
          if (err.message.includes("user-not-found")) {
            Alert.alert("User Not Found");
          } else if (err.message.includes("wrong-password")) {
            Alert.alert("wrong passwrd");
          } else {
            Alert.alert(err.message);
          }
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={BgImg}
        resizeMode="cover"
        style={{ width: width, height: (height / 3) * 0.6 }}
      />
      <View
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={Logo}
          resizeMode="cover"
          style={{ height: 80, width: 74, marginTop: 20 }}
        />
        <Text
          style={{
            fontSize: 18,
            color: "#000",
            fontWeight: "700",
            marginTop: 20,
          }}
        >
          Welcome Back
        </Text>
      </View>

      {/* email */}
      <Input
        placeholder="Email"
        setStateValue={setEmail}
        isPass={false}
        setEmailValidation={setEmailValidation}
      />

      {/* password */}
      <Input placeholder="Password" setStateValue={setPassword} isPass={true} />

      {/* bottom text */}
      <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
        <Text style={styles.btnTitle}>Login</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 5 }}>
          Didn't have an account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <Text style={{ fontSize: 14, color: "#42C561", marginLeft: 5 }}>
            Create here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  btnContainer: {
    backgroundColor: "#42C561",
    marginVertical: 20,
    height: 50,
    width: 280,
    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    justifyContent: "center",
  },
});
