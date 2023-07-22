import { TextInput } from "react-native";
import React, { useState } from "react";

const Input = ({ placeholder, isPass, setStateValue }) => {
  const [value, setValue] = useState("");

  const handleTextChange = (text) => {
    setValue(text);
    setStateValue(value);
  };

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={"grey"}
      value={value}
      onChangeText={handleTextChange}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={isPass ? true : false}
      style={{
        borderWidth: 1,
        borderColor: "black",
        height: 50,
        width: 280,
        alignSelf: "center",
        borderRadius: 10,
        paddingLeft: 20,
        margin: 20,
      }}
    />
  );
};

export default Input;
