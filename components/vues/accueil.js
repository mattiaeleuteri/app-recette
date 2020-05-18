import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Accueil({ navigation }) {
  const [ingredients, setIngredients] = useState([])
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.imageLogo}
        />
        <TextInput
          placeholder="Ingrédients..."
          onChangeText={(text) => setIngredients(text.trim().split(" "))}
          style={styles.searchInput}
        />
        <Ionicons.Button
          name="ios-search"
          onPress={() => navigation.navigate("Search", { ingredients : ingredients })}
          backgroundColor="green"
          size={30}
          borderRadius={10}
          style={styles.searchButton}
        >
          Search
        </Ionicons.Button>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
  },
  imageLogo: {
    width: 300,
    height: 300,
  },
  searchButton: {
    width: 250,
    height: 60,
    justifyContent: "center",
  },
  searchInput: {
    backgroundColor: "white",
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    height: 50,
    width: 300,
  },
});
