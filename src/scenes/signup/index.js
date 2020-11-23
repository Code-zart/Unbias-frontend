import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Signup = () => {
  const [signUpData, setSignUpData] = useState(null);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.placeholder]: e.target.value });
    console.log(signUpData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo1}>COM+</Text>
      <Text style={styles.logo2}>PACT</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Full Name"
          placeholderTextColor="#292525"
          onChange={handleChange}
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#292525"
          onChangeText={handleChange}
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#292525"
          onChangeText={handleChange}
        ></TextInput>
      </View>
      <Text style={styles.password}>
        Passwords must be 8-12 characters with at least 1 number and 2 special
        characters (!, $, %, &, ^)
      </Text>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signup}>Already have an account? Login. </Text>
      </TouchableOpacity>
    </View>
  );
};

//will need to condense these stylesheets onto one page to avoid duplicate code

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8B490",
    alignItems: "center",
    justifyContent: "center",
  },
  logo1: {
    fontWeight: "bold",
    fontSize: 38,
    color: "#292525",
  },
  logo2: {
    fontWeight: "bold",
    fontSize: 52,
    color: "#292525",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  password: {
    width: "80%",
    textAlign: "center",
    color: "black",
    fontSize: 11,
  },
  signup: {
    color: "white",
    fontSize: 14,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#FACC9B",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});

export default Signup;
