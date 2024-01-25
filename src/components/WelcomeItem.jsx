import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React from "react";

const WelcomeItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.img}
        style={[styles.image, { resizeMode: "contain" }]}
      ></Image>

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.info}>{item.info}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 240,
    flex: 0.5,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#3E3049",
  },
  info: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    paddingHorizontal: 20,
    color: "#665E77",
  },
});

export default WelcomeItem;
