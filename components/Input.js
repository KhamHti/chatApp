import { TextInput } from "react-native";
import React, { useState } from "react";

const Input = ({ placeholder, isPass, setStateValue, setEmailValidation }) => {
  const [value, setValue] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const handleTextChange = (text) => {
    setValue(text);
    setStateValue(text);

    if (placeholder === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const status = emailRegex.test(value);
      setIsEmail(status);
      setEmailValidation(status);
    }
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
        borderColor:
          !isEmail && placeholder == "Email" && value.length > 0
            ? "red"
            : "black",
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
