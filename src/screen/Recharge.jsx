import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectCard from "../components/Recharge/SelectCard";
import ConfirmRecharge from "../components/Recharge/ConfirmRecharge";

const Recharge = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SelectCard />
    </SafeAreaView>
  );
};

export default Recharge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
