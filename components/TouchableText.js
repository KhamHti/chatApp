import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const TouchableText = ({
  navigation,
  button,
  textBtn,
  isFalse,
  text,
  isRegister,
  handleSignUp,
}) => {
  const handler = () => {
    if (isFalse) {
      //
      navigation.navigate("Sign Up");
    }
    if (!isFalse) {
      navigation.navigate("Sign In");
    }
  };

  const LoginRegisterBtn = async () => {
    if (isRegister) {
      handleSignUp();
      navigation.navigate("Sign In");
    }
    if (!isRegister) {
      navigation.navigate("Home");
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.btnContainer} onPress={LoginRegisterBtn}>
        <Text style={styles.btnTitle}>{button}</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 14, color: "#000000", marginLeft: 5 }}>
          {text}
        </Text>
        <TouchableOpacity onPress={handler}>
          <Text style={{ fontSize: 14, color: "#42C561", marginLeft: 5 }}>
            {textBtn}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TouchableText;

const styles = StyleSheet.create({
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
