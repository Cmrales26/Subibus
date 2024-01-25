import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const HeaderLogin = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/icon.png")}
        style={styles.image}
      />
      <Text style={styles.text}>SUBIBUS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
  },
  image: {
    height: 150,
    marginLeft: "-10%",
    width: 150,
    resizeMode: "contain",
  },
  text: {
    color: "#7D57C9",
    fontSize: 40,
    fontWeight: "900",
  },
});

export default HeaderLogin;
