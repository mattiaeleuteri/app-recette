import React from "react";
import { View, TextInput, Button, Image, Text } from "react-native";
import Search from "./search";

export default function Accueil() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
      }}
    >
      <Text
        style={{
          marginBottom: 50,
        }}
      >
        LOGO
      </Text>
      <Search></Search>
      <Button title="Rechercher"></Button>
    </View>
  );
}
