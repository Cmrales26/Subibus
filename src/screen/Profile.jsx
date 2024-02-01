import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "react-native-paper";
import FooterNav from "../components/FooterNav";
// import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Cerrar Sesión</Text>
      <Button onPress={logoutHandler}>Logout</Button>
      <FooterNav CurrentView={"Profile"} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
