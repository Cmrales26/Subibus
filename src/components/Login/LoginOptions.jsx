import { ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import FormLogin from "./FormLogin";
import { Button } from "react-native-paper";

const LoginForm = () => {
  return (
    <ScrollView style={styles.cotainer}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Button
        style={{ marginBottom: 20 }}
        icon="google"
        size
        mode="contained"
        textColor="#3E3049"
        buttonColor="#FFFFFF"
        onPress={() => console.log("Pressed")}
      >
        Iniciar Sesión con Google
      </Button>

      <Button
        style={styles.LoginWith}
        icon="facebook"
        mode="contained"
        textColor="#3E3049"
        buttonColor="#FFFFFF"
        onPress={() => console.log("Pressed")}
      >
        Iniciar Sesión con Google
      </Button>
      <FormLogin />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    color: "#3E3049",
    padding: 10,
    fontSize: 26,
    fontWeight: "600",
    flexDirection: "row",
    marginBottom: 10,
  },
});

export default LoginForm;
