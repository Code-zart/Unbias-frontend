import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Onboarding = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#F8B490",
          image: <Image source={require("../../assets/splash.png")} />,
          title: "Com + Pact",
          subtitle: "is built for the community",
        },
        {
          backgroundColor: "#F8B490",
          image: <Image source={require("../../assets/splash.png")} />,
          title: "Com + Pact",
          subtitle: "is built for the community",
        },
        {
          backgroundColor: "#F8B490",
          image: <Image source={require("../../assets/splash.png")} />,
          title: "Com + Pact",
          subtitle: "is built for the community",
        },
      ]}
    />
  );
};

export default Onboarding;
