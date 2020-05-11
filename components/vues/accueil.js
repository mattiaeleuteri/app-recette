import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Search from "../outils/search";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

export default function Accueil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogo}>LOGO</Text>
      <Search></Search>
      <Ionicons.Button
        name="ios-search"
        onPress={() => navigation.navigate("Search")}
        backgroundColor="green"
        style={styles.searchButton}
      >
        Search
      </Ionicons.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogo: {
    marginBottom: 50,
    fontSize: 60,
  },
  searchButton: {
    paddingTop: 5,
    minWidth: 120,
    justifyContent: "center",
  },
});
