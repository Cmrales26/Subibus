import { Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
const RefSis = () => {
  const ShareMessange = async () => {
    try {
      const res = await Share.share({
        message: "Descarga la aplicación Subibus",
      });
      if (res.action === Share.sharedAction) {
        if (res.activityType) {
          console.log(`Enviado con ${res.activityType}`);
        } else {
          console.log("Enviado");
        }
      } else if (res.action === Share.dismissedAction) {
        console.log("dismiseed");
      }
    } catch (error) {}
  };
  return (
    <TouchableOpacity style={styles.container} onPress={ShareMessange}>
      <Octicons name="person-add" size={40} color="#6648AF" />
      <View style={{ width: "80%" }}>
        <Text style={{ fontSize: 20, fontWeight: 500, color: "#6648AF" }}>
          Referidos
        </Text>
        <Text style={{ color: "#000" }}>
          Toca e invita a tus amigos a unirse a Subibus y consigue hasta 200.000
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RefSis;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#B2B1FF",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
