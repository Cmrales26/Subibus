import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "react-native-paper";

const CardsItem = ({ item }) => {
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
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: card.img }}
        style={styles.image}
        resizeMode="cover"
        borderRadius={15}
      >
        <View style={styles.overlay}>
          <View>
            <Text style={styles.name}>{card.card_name}</Text>
          </View>

          <View style={styles.info}>
            <View>
              <Text
                style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}
              >
                Saldo actual
              </Text>
              <Text
                style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}
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
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 350,
    justifyContent: "center",
  },
  overlay: {
    borderRadius: 15, // Aplicar borderRadius directamente a ImageBackground
    height: 230,
    backgroundColor: "rgba(00, 00, 00, 0.4)",
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
