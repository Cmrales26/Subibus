import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "react-native-paper";

const CardsItem = ({ item }) => {
  const { width } = Dimensions.get("screen");
  const [card, setCard] = useState();

  useEffect(() => {
    setCard(item);
  }, []);

  if (card === undefined) {
    return (
      <View>
        <Text>Cargando ...</Text>
      </View>
    );
  }

  const formattedAmount = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(card.amunt);

  return (
    <View style={[styles.container, { width }]}>
      <ImageBackground
        source={{ uri: card.img }}
        style={styles.container}
        resizeMode="cover"
        borderRadius={15}
      >
        <View style={[styles.overlay]}>
          <View>
            <Text style={styles.name}>{card.card_name}</Text>
          </View>

          <View style={styles.info}>
            <View>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 20,
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Saldo actual
              </Text>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 20,
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                {formattedAmount}
              </Text>
            </View>
            {/* <View>
              <Button
                borderRadius={15}
                icon="wallet"
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                Recargar Tarjeta
              </Button>
            </View> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  overlay: {
    margin: -20,
    borderRadius: 15, // Aplicar borderRadius directamente a ImageBackground
    height: 225,
    backgroundColor: "rgba(00, 00, 00, 0.20)",
    justifyContent: "center",
    padding: 20,
    gap: 40,
  },
  name: { color: "#FFF", fontSize: 25, fontWeight: "900" },
  info: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
