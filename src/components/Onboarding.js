import React from "react";
import { Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      containerStyles={styles.container}
      onSkip={() => navigation.navigate("Sign Up")}
      onDone={() => navigation.navigate("Sign Up")}
      pages={[
        {
          backgroundColor: "#F8B490",
          image: <Image source={require("../../assets/Street.png")} />,
          title: "Find + Support",
          subtitle: "Businesses in Your Community",
        },
        {
          backgroundColor: "#ffd369",
          image: <Image source={require("../../assets/People.png")} />,
          title: "Track + Moniter",
          subtitle: "the impact to causes close to your heart. ",
        },
        {
          backgroundColor: "#19d3da",
          image: <Image source={require("../../assets/Verified.png")} />,
          title: "Search + Volunteer",
          subtitle: "for events and organizations that you care about.",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 150,
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
  },
  image: {
    height: 100,
  },
});

export default OnboardingScreen;
