import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log("logged user : ", user);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
