import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../components/Input";
import { firebaseAuth, firestoreDB } from "../config/firebase.config";
import { doc, setDoc } from "firebase/firestore";

const BgImg = require("../assets/images/bg.png");
const Logo = require("../assets/images/logo.png");
const chatplus = require("../assets/images/chatplus.png");

const { width, height } = Dimensions.get("screen");

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);

  const handleSignUp = async () => {
    if (emailValidation && email !== "") {
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          const data = {
            _id: userCredential?.user.uid,
            fullName: name,
            providerData: userCredential.user.providerData[0],
          };
          console.log(data);

          setDoc(
            doc(firestoreDB, "users", userCredential?.user.uid),
            data
          ).then(() => {
            navigation.navigate("Sign In");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("err0r code", errorCode);
          console.log("err sms", errorMessage);
          // ..
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            Join With Us
          </Text>
        </View>
        <Image
          source={chatplus}
          resizeMode="cover"
          style={{
            height: 60,
            width: 60,
            borderRadius: 20,
            backgroundColor: "#422561",
            alignSelf: "center",
            marginVertical: 20,
          }}
        />
        {/* name  */}
        <Input
          placeholder="Enter Your Name"
          setStateValue={setName}
          isPass={false}
        />

        {/* email */}
        <Input
          placeholder="Email"
          setStateValue={setEmail}
          isPass={false}
          setEmailValidation={setEmailValidation}
        />

        {/* password */}
        <Input
          placeholder="Password"
          setStateValue={setPassword}
          isPass={true}
        />

        {/* bottom text  */}
        {/* <TouchableText
          handleSignUp={handleSignUp}
          navigation={navigation}
          button="Register"
          isRegister={true}
          textBtn="Login here"
          isFalse={false}
          text="Already have an account !"
        /> */}

        <TouchableOpacity style={styles.btnContainer} onPress={handleSignUp}>
          <Text style={styles.btnTitle}>Register</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 14, color: "#000000", marginLeft: 5 }}>
            Already have an account !
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
            <Text style={{ fontSize: 14, color: "#42C561", marginLeft: 5 }}>
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
