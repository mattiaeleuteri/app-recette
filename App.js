import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Accueil from "./components/accueil";

export default function App() {
  return <Accueil style={styles.container}></Accueil>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
