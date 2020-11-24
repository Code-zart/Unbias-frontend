import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Street from "../../../assets/Street.png";

const Login = ({ navigation }) => {
  const [loginData, setLoginData] = useState(null);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.placeholder]: e.target.value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo1}>COM+</Text>
      <Text style={styles.logo2}>PACT</Text>
      <View style={styles.image}>
        <Image source={Street} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#292525"
          textContentType="emailAddress"
          onChange={handleChange}
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#292525"
          textContentType="password"
          onChange={handleChange}
        ></TextInput>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={styles.signup}>SIGNUP</Text>
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
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 165,
    paddingBottom: 20,
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
  forgot: {
    color: "white",
    fontSize: 11,
  },
  signup: {
    color: "white",
    fontSize: 14,
  },
  loginText: {
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

export default Login;
