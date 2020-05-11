import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Recette(props) {
  function Title(props) {
    return <Text>{props.title}</Text>;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.navigate("Recipe")}
    >
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <Title title={props.title} style={styles.title}></Title>
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
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {},
});
