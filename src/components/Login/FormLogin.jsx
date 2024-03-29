import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

const FormLogin = () => {
  const [show, setshow] = useState(true);
  const [icon, setIcon] = useState("eye");
  const { Login, error } = useAuth();

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (show) {
      setIcon("eye");
      return;
    }
    setIcon("eye-off");
  }, [show]);

  const ishowm = () => {
    setshow(!show);
  };

  const onSubmit = async (data) => {
    const res = await Login(data);
    if (res !== undefined) {
      await AsyncStorage.setItem("Token", res.token);
      navigation.replace("Home");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {error.length !== 0 ? (
        <View
          style={{
            backgroundColor: "rgba(255, 53, 53, 0.57)",
            paddingVertical: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            {error}
          </Text>
        </View>
      ) : null}

      <ScrollView>
        <Text style={{ color: "red", marginBottom: 5, textAlign: "left" }}>
          {errors.Email ? errors.Email.message : null}
        </Text>
        <Controller
          control={control}
          name="Email"
          rules={{
            required: {
              value: true,
              message: "Ingrese El correo electronico",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Correo invalido",
            },
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={{ width: "100%" }}
              label="Email"
            />
          )}
        />

        <Text style={{ color: "red", marginVertical: 5, textAlign: "left" }}>
          {errors.password ? errors.password.message : null}
        </Text>
        <Controller
          control={control}
          name="password"
          rules={{
            required: {
              value: true,
              message: "Ingrese la contraseña",
            },
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={{
                width: "100%",
              }}
              label="Contraseña"
              secureTextEntry={show}
              right={<TextInput.Icon onPress={() => ishowm()} icon={icon} />}
            />
          )}
        />

        {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ color: "#3E3049", fontSize: 15 }}>
            Mantener la sesión Iniciada
          </Text>
        </View> */}

        <Button
          style={{ marginTop: 40 }}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          Iniciar Sesión
        </Button>

        <Button
          style={{ marginTop: 10, color: "#3E3049" }}
          mode="text"
          onPress={() => console.log("Pressed")}
        >
          Olvide Mi contraseña
        </Button>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#3E3049" }}>¿No tienes una cuenta?</Text>
          <Button
            style={{ color: "#3E3049" }}
            mode="text"
            onPress={() => console.log("Pressed")}
          >
            Crear Cuenta
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
export default FormLogin;
