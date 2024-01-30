import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "@expo/vector-icons/Octicons";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Pay from "../screen/Pay";

const Menu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#6648AF",
          inactiveTintColor: "gray",
          tabBarStyle: {
            height: 60,
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarLabelStyle: {
            paddingBottom: 10,
          },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Pagar"
          component={Pay}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="note" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Menu;

const styles = StyleSheet.create({});
