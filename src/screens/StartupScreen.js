import React from "react";
import { useFonts } from "expo-font";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const StartupScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "MonumentExtended-Ultrabold": require("../../assets/fonts/MonumentExtended-Ultrabold.otf"),
  });

  if (!loaded) {
    return false;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden></StatusBar>
      {/* Header Text */}
      <Text style={styles.header}>
        Discover,{"\n"}collect, and sell{"\n"}extraordinary{"\n"}NFTs
      </Text>

      {/* Decorations */}
      <Image
        source={require("../../assets/images/decors/decor-1.png")}
        style={styles.decor1}
      />
      <Image
        source={require("../../assets/images/decors/decor-2.png")}
        style={styles.decor2}
      />

      

      {/* Get Started */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push("Explore")}
      >
        <Text style={styles.textBtn}>Let's Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101113",
  },
  header: {
    fontFamily: "MonumentExtended-Ultrabold",
    fontSize: 30,
    color: "#FFF",
    padding: 20,
  },
  btn: {
    backgroundColor: "#854BFE",
    borderWidth: 0.5,
    borderColor: "#854BFE",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    position: "absolute",
    // width: "85%",
    right: 0,
    left: 0,
    bottom: 50,
  },
  textBtn: {
    fontFamily: "Poppins-Semibold",
    fontSize: 18,
    color: "#FFF",
  },
  decor1: {
    height: 400,
    width: 300,
    position: "absolute",
    zIndex: -1,
    right: 0,
    top: 200,
  },
  decor2: {
    height: 260,
    width: 310,
    position: "absolute",
    zIndex: -1,
    bottom: 0,
  },
});
