import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function Recette(props) {
  function Title(props) {
    return <Text>{props.title}</Text>;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        props.navigation.navigate("Recipe", { recette: props.recette })
      }
    >
      <Image
        style={styles.image}
        source={{
          uri: props.recette.image,
        }}
      />
      <Title title={props.recette.title} style={styles.title}></Title>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 20,
    margin: 5,
    borderRadius: 15,
    fontSize: 25,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {},
});
