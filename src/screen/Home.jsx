import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNav from "../components/home/HomeNav";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeNav></HomeNav>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
