import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform, StyleSheet, Text, View } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const MainNav = () => (
  <Appbar.Header style={styles.nav}>
    <View style={styles.navLogo}>
      <Text style={styles.navText1}> COM+ </Text>
      <Text style={styles.navText2}> PACT </Text>
    </View>
    <View style={styles.controls}>
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </View>
  </Appbar.Header>
);

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  controls: {
    display: "flex",
    flexDirection: "row",
  },
  navLogo: {
    marginLeft: 8,
  },
  navText1: {
    fontSize: 14,
  },
  navText2: {
    fontSize: 20,
  },
});

export default MainNav;
