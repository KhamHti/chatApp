import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { firebaseAuth, firestoreDB } from "../config/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { SET_USER } from "../context/actions/userActions";
import { useDispatch } from "react-redux";
const Logo = require("../assets/images/logo.png");

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    checkLoggedUser();
  }, []);

  const checkLoggedUser = async () => {
    firebaseAuth.onAuthStateChanged((userCredential) => {
      if (userCredential?.uid) {
        getDoc(doc(firestoreDB, "users", userCredential?.uid))
          .then((docSnap) => {
            if (docSnap.exists()) {
              console.log("user data : ", docSnap.data());
              dispatch(SET_USER(docSnap.data()));
            }
          })
          .then(() => {
            setTimeout(() => {
              navigation.replace("Home");
            }, 2000);
          });
      } else {
        navigation.replace("Sign In");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} resizeMode="cover" style={styles.img} />
      <ActivityIndicator
        size="large"
        color={"green"}
        style={{ paddingBottom: 50 }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  img: {
    width: 60,
    height: 60,
  },
});
