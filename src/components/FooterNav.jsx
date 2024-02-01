import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";

const FooterNav = ({ CurrentView }) => {
  const navigate = useNavigation();
  const [screen, setScreen] = useState("Home");
  useEffect(() => {
    setScreen(CurrentView);
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigate.navigate("Home")}
      >
        <Octicons
          name="home"
          size={25}
          color={screen === "Home" ? "#6648AF" : "gray"}
        />
        <Text style={{ color: screen === "Home" ? "#6648AF" : "gray" }}>
          Inicio
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigate.navigate("Pay")}
      >
        <Octicons
          name="note"
          size={25}
          color={screen === "Pay" ? "#6648AF" : "gray"}
        />
        <Text style={{ color: screen === "Pay" ? "#6648AF" : "gray" }}>
          Pagar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigate.navigate("Profile")}
      >
        <Octicons
          name="person"
          size={25}
          color={screen === "Profile" ? "#6648AF" : "gray"}
        />
        <Text style={{ color: screen === "Profile" ? "#6648AF" : "gray" }}>
          Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNav;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFF",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
