import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const menus = [
  { id: 1, name: "Trend" },
  { id: 2, name: "Details" },
  { id: 3, name: "Offers" },
];

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [activeMenu, setActiveMenu] = useState("Trend");

  const [loaded] = useFonts({
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return false;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={item.image}
            style={{ width: "100%", height: 400, borderRadius: 15 }}
          />
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Buy */}
        <View style={styles.buyWrapper}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.headerName}>{item.name}</Text>
            <TouchableOpacity style={{ marginTop: 15 }}>
              <Feather name="heart" color="#854BFE" size={23} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btnBuy}
            onPress={() => alert("Successfull!")}
          >
            <Text style={styles.textBtn}>Buy for {item.price} ETH</Text>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <View style={styles.menuWrapper}>
          {menus.map((menu, index) => (
            <TouchableOpacity
              key={index}
              style={
                activeMenu == menu.name ? styles.menu(menu.name) : styles.menu()
              }
              onPress={() => setActiveMenu(menu.name)}
            >
              <Text
                style={
                  activeMenu == menu.name
                    ? styles.menuText(menu.name)
                    : styles.menuText()
                }
              >
                {menu.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Graph */}
        <View style={{ paddingLeft: 20, marginTop: 10 }}>
          <Image
            source={require("../../assets/images/graph.png")}
            style={{ width: "96%", resizeMode: "contain" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101113",
  },
  backBtn: {
    position: "absolute",
    zIndex: 1,
    left: 20,
    top: 25,
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 50,
    padding: 5,
    blurRadius: 10,
  },
  header: {
    marginHorizontal: 15,
  },
  menuWrapper: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 15,
    borderBottomColor: "rgba(255,255,255,0.3)",
    borderBottomWidth: 1,
  },
  menu: (active) => ({
    borderBottomColor: active ? "rgba(255,255,255,0.5)" : "transparent",
    borderBottomWidth: active ? 1 : 0,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  }),
  menuText: (active) => ({
    color: "#FFF",
    paddingHorizontal: 3,
    fontFamily: active ? "Poppins-Semibold" : "Poppins-Regular",
    paddingBottom: 15,
    alignItems: "center",
  }),
  headerName: {
    fontFamily: "Poppins-Semibold",
    color: "#FFF",
    fontSize: 25,
    marginTop: 15,
  },
  buyWrapper: {
    marginHorizontal: 17,
  },
  btnBuy: {
    backgroundColor: "#854BFE",
    borderWidth: 0.5,
    borderColor: "#854BFE",
    alignItems: "center",
    paddingVertical: 11,
    borderRadius: 10,
    width: "100%",
    marginTop: 15,
  },
  textBtn: {
    fontFamily: "Poppins-Semibold",
    fontSize: 17,
    color: "#FFF",
  },
});
