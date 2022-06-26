import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Card = ({ item, navigation }) => {
  const [loaded] = useFonts({
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return false;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { item: item })}
    >
      {/* Image */}
      <Image
        source={item.image}
        style={{
          width: 150,
          height: 200,
          resizeMode: "contain",
          marginTop: -5,
        }}
      />

      {/* Info */}
      <View style={styles.infoWrapper}>
        {/* Name */}
        <Text style={styles.name}>{item.name.length > 20 ? item.name.slice(0,18) + '...' : item.name}</Text>

        {/* Detail */}
        <View style={styles.detailWrapper}>
          {/* Price */}
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
            <Text
              style={{
                marginLeft: 3,
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                color: "#FFF",
              }}
            >
              ETH
            </Text>
          </View>

          {/* Likes */}
          <View style={styles.likeWrapper}>
            <MaterialCommunityIcons name="heart" size={15} color="#854BFE" />
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                color: "#fFF",
                marginLeft: 3,
              }}
            >
              {item.likes}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.07)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 15,
  },
  infoWrapper: {},
  name: {
    fontFamily: "Poppins-Semibold",
    fontSize: 13,
    color: "#FFF",
  },
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  priceWrapper: {
    flexDirection: "row",
  },
  price: {
    fontFamily: "Poppins-Semibold",
    fontSize: 14,
    color: "#FFF",
  },
  likeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
