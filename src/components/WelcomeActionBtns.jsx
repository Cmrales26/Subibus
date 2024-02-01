import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoadingActionBtns = () => {
  const navigation = useNavigation();

  const LoginHandler = async () => {
    try {
      await AsyncStorage.setItem("FirstUse", "NoFirstUser");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.textContainer}>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff", fontWeight: "500" }}>
            Crear una cuenta
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginTextContainer}>
        <Text>Si ya posee</Text>
        <TouchableOpacity onPress={LoginHandler}>
          <Text style={styles.loginText}> Inicie Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: "#6648AF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  loginTextContainer: {
    marginTop: 10,
    flexDirection: "row",
  },

  loginText: {
    color: "#3E3049",
    fontWeight: "500",
  },
});

export default LoadingActionBtns;
