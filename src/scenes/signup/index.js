import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import signUp from "../../../assets/sign-up.png";

const Signup = ({ navigation }) => {
  const [signUpData, setSignUpData] = useState(null);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.placeholder]: e.target.value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo1}>COM+</Text>
      <Text style={styles.logo2}>PACT</Text>
      <View style={styles.image}>
        <Image source={signUp} />
      </View>
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

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 200,
    paddingBottom: 50,
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
    marginTop: 30,
    marginBottom: 5,
  },
});

export default Signup;
