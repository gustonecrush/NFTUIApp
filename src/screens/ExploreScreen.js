import React from "react";
import { useFonts } from "expo-font";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Items from "../../assets/data/Items";
import Card from "../components/Card";

const ExploreScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return false;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
        {/* Background */}
        <Image
          source={require("../../assets/images/decors/decor-3.png")}
          style={styles.background}
        />

        {/* Profile */}
        <View style={styles.profileWrapper}>
          {/* User Profile Picture */}
          <View styles={styles.userImgWrapper}>
            <Image
              source={require("../../assets/images/user.png")}
              style={styles.userImg}
            />
          </View>

          {/* User Profile Info */}
          <View style={styles.userInfoWrapper}>
            <Text style={styles.userName}>Farhantysh</Text>
            <View style={styles.userDetailWrapper}>
              <View style={styles.textWrapper}>
                <Text style={styles.text}>4.5</Text>
                <MaterialCommunityIcons name="star" color="#FFF" size={14} />
              </View>

              <Text style={{ color: "#FFF" }}>{" | "}</Text>
              <View style={styles.textWrapper}>
                <Text style={styles.text}>92</Text>
                <MaterialCommunityIcons
                  name="heart"
                  color="#854BFE"
                  size={15}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.textInputWrapper}>
          <Feather name="search" size={18} color="#909091" />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#909091"
          />
        </View>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={24} color="#878889" />
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.cardsWrapper}>
          {Items.map((item, index) => (
            <Card key={index} item={item} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101113",
  },
  header: {},
  navigation: {},
  background: {
    position: "absolute",
    left: -25,
    zIndex: -1,
  },
  backBtn: {
    position: "absolute",
    zIndex: 1,
    left: 25,
    top: 30,
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 50,
    padding: 3,
    blurRadius: 10,
  },
  profileWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  userImgWrapper: {
    height: 130,
    width: 130,
    backgroundColor: "rgba(255,255,255,0.05)",
    backgroundColor: "red",
    borderRadius: 130,
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    marginBottom: 25,
  },
  userImg: {
    height: 120,
    width: 120,
    borderRadius: 120,
    resizeMode: "contain",
  },
  userInfoWrapper: {
    alignItems: "center",
    marginTop: 15,
  },
  userName: {
    fontFamily: "Poppins-Semibold",
    fontSize: 22,
    color: "#FFF",
  },
  userDetailWrapper: {
    flexDirection: "row",
    marginTop: 4,
  },
  text: {
    fontFamily: "Poppins-Semibold",
    marginRight: 6,
    color: "#FFF",
    fontSize: 13,
  },
  searchWrapper: {
    marginHorizontal: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 25,
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  textInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.07)",
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "91%",
    marginRight: 10,
  },
  textInput: {
    marginLeft: 10,
    fontFamily: "Poppins-Regular",
    color: "#FFF",
  },
  cardsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
    marginTop: 20,
  },
});
