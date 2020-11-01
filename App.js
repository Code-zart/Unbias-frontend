import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>
      <View>
        <TextInput
          label="Email"
          style={{
            height: 40,
            width: 250,
            borderColor: "gray",
            borderWidth: 1,
            margin: 5,
          }}
          placeholder="Email"
        ></TextInput>
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: "gray",
            borderWidth: 1,
            margin: 5,
          }}
          placeholder="Password"
        ></TextInput>
      </View>
      <View>
        <Button
          onPress={() => alert("You pressed me!")}
          title="Submit"
          color="purple"
          style={styles.button}
        ></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
  text: {
    color: "white",
  },
  button: {
    margin: "20px",
    height: "10px",
    color: "gray",
  },
});
