import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import TouchableText from "../components/TouchableText";

const BgImg = require("../assets/images/bg.png");
const Logo = require("../assets/images/logo.png");

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      <Input placeholder="Email" setStateValue={setEmail} isPass={false} />
      <Input
        placeholder="Password"
        setStateValue={setPassword}
        isPass={true}
      />

      <TouchableText
        navigation={navigation}
        button="Login"
        textBtn="Create here"
        isFalse={true}
        text="Doesn't have an account ?"
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
