import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RechardForm from "./RechardForm";

const CardSelected = ({ card }) => {
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState(" ");
  const [cardid, setCardId] = useState(" ");
  const [cardname, setCardName] = useState(" ");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (card !== undefined && card !== "") {
      setImage(card.img);
      setAmount(card.amunt);
      setBalance(card.amunt);
      setCardId(card.card_id);
      setCardName(card.card_name);
    }
  }, [card]);

  return (
    <View style={styles.container}>
      {image === " " ? (
        <Text>Por favor selecione una tarjeta</Text>
      ) : (
        <View style={{ marginTop: "-15%" }}>
          <Image
            style={{ width: 350, height: 130 }}
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            resizeMode="cover"
            source={{ uri: image }}
          ></Image>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 60,
              justifyContent: "center",
              paddingHorizontal: 20,
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Text style={{ fontSize: 20, color: "#3E3049", fontWeight: "600" }}>
              {new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              }).format(amount)}
            </Text>
          </View>
          <RechardForm
            data={{
              amount: balance,
              service: cardid,
              cardname: card.card_name,
            }}
            setAmount={setAmount}
          />
        </View>
      )}
    </View>
  );
};

export default CardSelected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
});
