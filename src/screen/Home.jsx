import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNav from "../components/home/HomeNav";
import Cards from "../components/home/Cards";
import { useAuth } from "../context/AuthContext";
import RefSis from "../components/home/RefSis";
import Options from "../components/home/Options";

const Home = () => {
  const { loading } = useAuth();
  if (loading) {
    return (
      <View>
        <Text>Cargando</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <HomeNav />
      <Cards />
      <RefSis />
      <Options />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
