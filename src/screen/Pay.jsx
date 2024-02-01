import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FooterNav from "../components/FooterNav";

const Pay = () => {
  return (
    <View style={styles.container}>
      <Text>Pay</Text>
      <FooterNav CurrentView={"Pay"} />
    </View>
  );
};

export default Pay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
