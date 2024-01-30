import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";
import { Avatar, IconButton } from "react-native-paper";

const HomeNav = () => {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, color: "#6648AF", fontWeight: "600" }}>
          {user.name} {user.lastname}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          iconColor="#6648AF"
          icon="bell"
          size={25}
          onPress={() => console.log("Pressed")}
        />
        {user.profilePhoto ? (
          <Image
            style={{ width: 24, height: 24, borderRadius: 12 }}
            source={{ uri: user.profilePhoto }}
            onPress={() => console.log("first")}
          />
        ) : (
          <Avatar.Image
            size={25}
            source={require("../../../assets/UserImage.png")}
            onPress={() => console.log("first")}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: -20,
    paddingHorizontal: 20,
  },
});
