import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { List, TouchableRipple } from "react-native-paper";
import Ionic from "@expo/vector-icons/Ionicons";
import { useAuth } from "../../context/AuthContext";
import CardSelected from "./CardSelected";
import RechardForm from "./RechardForm";
import ConfirmRecharge from "./ConfirmRecharge";

const SelectCard = () => {
  const navigation = useNavigation();
  const [card, setCards] = useState();
  const [title, setTitle] = useState("Selecione una tarjeta");
  const [cardinfo, setcardInfo] = useState("");
  const [expanded, setExpanded] = useState(false);
  const { user, loading } = useAuth("");

  useEffect(() => {
    setCards(user.cards);
  }, [user]);

  if (loading || card === undefined) {
    return (
      <View>
        <Text>Cargando ...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <Ionic name="arrow-back" size={30} color="#6648AF" />
      </TouchableOpacity>

      <View>
        <Text style={{ marginVertical: 10, fontSize: 25, color: "#6648AF" }}>
          Selecione una tarjeta
        </Text>

        <List.Section>
          <List.Accordion
            theme={{ colors: { background: "transparent" } }}
            titleStyle={{ color: "#6648AF" }}
            title={title}
            expanded={expanded}
            onPress={() => setExpanded(!expanded)}
            left={(props) => (
              <List.Icon {...props} icon="cards" color="#6648AF" />
            )}
            style={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#6648AF",
              borderRadius: 15,
            }}
          >
            <View style={{ marginLeft: -40, maxHeight: 300 }}>
              <ScrollView>
                {card.map((card, idx) => (
                  <List.Item
                    left={(props) => (
                      <List.Icon
                        {...props}
                        icon="card-bulleted-outline"
                        color="#6648AF"
                      />
                    )}
                    rippleColor={"#FFF"}
                    style={{
                      backgroundColor: "transparent",
                      borderBottomWidth: 1,
                      borderBottomColor: "#6648AF",
                      borderRadius: 8,
                    }}
                    key={idx}
                    titleStyle={{ color: "#6648AF" }}
                    title={card.card_name}
                    onPress={() => {
                      setExpanded(!expanded);
                      setTitle(card.card_name);
                      setcardInfo(card);
                    }}
                  />
                ))}
              </ScrollView>
            </View>
          </List.Accordion>
        </List.Section>
      </View>
      <CardSelected card={cardinfo}></CardSelected>
    </SafeAreaView>
  );
};

export default SelectCard;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    padding: 20,
    width: "100%",
  },
});
