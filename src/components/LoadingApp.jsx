import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "../../assets/icon.png";
import React, { useEffect } from "react";
import { ProgressBar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoadingApp = ({ progress, setProgress, navigation }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 100;
        }
        return oldProgress + 1;
      });
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress !== 100) {
      return;
    }

    const FirstLoginData = async () => {
      const value = await AsyncStorage.getItem("FirstUse");
      if (value !== null) {
        navigation.replace("Login");
        return;
      }
      navigation.replace("Welcome");
    };
    FirstLoginData();
  }, [progress]);

  return (
    <View style={styles.container}>
      <Image source={Icon} />
      <Text style={styles.appname}>SUBIBUS</Text>
      <ProgressBar
        style={styles.loadingbar}
        progress={progress / 100}
        color="#7D57C9"
      />
      <Text>{progress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  appname: {
    fontSize: 50,
    fontWeight: "700",
    color: "#7D57C9",
  },
  loadingbar: {
    width: 300,
    marginTop: 20,
    height: 7,
    borderRadius: 10,
  },
});

export default LoadingApp;
