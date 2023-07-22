import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import TouchableText from "../components/TouchableText";

const BgImg = require("../assets/images/bg.png");
const Logo = require("../assets/images/logo.png");
const chatplus = require("../assets/images/chatplus.png");

const { width, height } = Dimensions.get("screen");

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Input
          placeholder="Enter Your Name"
          setStateValue={setName}
          isPass={false}
        />
        <Input placeholder="Email" setStateValue={setEmail} isPass={false} />
        <Input
          placeholder="Password"
          setStateValue={setPassword}
          isPass={true}
        />
        <TouchableText
          navigation={navigation}
          button="Register"
          textBtn="Login here"
          isFalse={false}
          text="Already have an account !"
        />
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
});
