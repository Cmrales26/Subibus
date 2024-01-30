import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import MtcIcon from "@expo/vector-icons/MaterialCommunityIcons";
import MtIcon from "@expo/vector-icons/MaterialIcons";
import FA5 from "@expo/vector-icons/FontAwesome5";
const Options = () => {
  return (
    <View style={styles.container}>
      <View style={styles.optioncontainer}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <MtIcon
            style={{ backgroundColor: "#FFF", padding: 10, borderRadius: 15 }}
            name="attach-money"
            size={40}
            color="#6648AF"
          />
          <Text style={{ marginTop: 10 }}>Recargar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <MtIcon
            style={{ backgroundColor: "#FFF", padding: 10, borderRadius: 15 }}
            name="payments"
            size={40}
            color="#6648AF"
          />
          <Text style={{ marginTop: 10 }}>Pagar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <MtcIcon
            style={{ backgroundColor: "#FFF", padding: 10, borderRadius: 15 }}
            name="routes"
            size={40}
            color="#6648AF"
          />
          <Text style={{ marginTop: 10 }}>Rutas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optioncontainer}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <MtcIcon
            style={{ backgroundColor: "#FFF", padding: 10, borderRadius: 15 }}
            name="cards"
            size={40}
            color="#6648AF"
          />
          <Text style={{ marginTop: 10 }}>Tarjetas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <FA5
            style={{ backgroundColor: "#FFF", padding: 10, borderRadius: 15 }}
            name="route"
            size={40}
            color="#6648AF"
          />
          <Text style={{ marginTop: 10 }}>Viajes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <MtcIcon
            style={{ backgroundColor: "#FFF", padding: 10, borderRadius: 15 }}
            name="alert-rhombus"
            size={40}
            color="#6648AF"
          />
          <Text style={{ marginTop: 10 }}>Alerta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },

  optioncontainer: {
    padding: 20,
    gap: 40,
    flexDirection: "row",
  },
});
