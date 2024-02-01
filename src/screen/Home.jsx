import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNav from "../components/home/HomeNav";
import Cards from "../components/home/Cards";
import { useAuth } from "../context/AuthContext";
import RefSis from "../components/home/RefSis";
import Options from "../components/home/Options";
import FooterNav from "../components/FooterNav";
import { Text, Button } from "react-native-paper";

const Home = ({ navigation }) => {
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
      <FooterNav CurrentView={"Home"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
