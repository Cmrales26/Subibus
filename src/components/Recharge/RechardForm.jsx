import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ANTIcon from "@expo/vector-icons/AntDesign";
import ConfirmRecharge from "./ConfirmRecharge";

const RechardForm = ({ data, setAmount }) => {
  const [income, setIncome] = useState(0);
  const lastValue = data.amount;
  useEffect(() => {
    if (income > 0) {
      setAmount(lastValue + income);
    } else {
      setAmount(lastValue);
    }
  }, [income, data.amount]);

  const handleTextChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setIncome(Number(numericValue));
  };

  const handlePlus = () => {
    setIncome(income + 1000);
  };
  const handleMinus = () => {
    if (income > 0) {
      setIncome(income - 1000);
      return;
    }
  };

  return (
    <View>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 20, color: "#6648AF" }}>
          Cuanto desea Ingresar
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              padding: 14,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
            backgroundColor={"#e7dfec"}
            keyboardType="numeric"
            value={new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(income)}
            onChangeText={handleTextChange}
          ></TextInput>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#e7dfec",
              paddingVertical: 8,
              paddingHorizontal: 8,
              gap: 10,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={handlePlus}
            >
              <ANTIcon
                style={{
                  backgroundColor: "#FFF",
                  padding: 10,
                  borderRadius: 5,
                }}
                name="plus"
                size={20}
                color="#6648AF"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={handleMinus}
            >
              <ANTIcon
                style={{
                  backgroundColor: "#FFF",
                  padding: 10,
                  borderRadius: 5,
                }}
                name="minus"
                size={20}
                color="#6648AF"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ConfirmRecharge income={income} cardName={data.cardname} />
        </View>
      </View>
    </View>
  );
};

export default RechardForm;

const styles = StyleSheet.create({});
