import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Recette from "../outils/recette";

function arrayToStringIngredients(array) {
  let result = "";
  for (const ingredient of array) {
    if (array.indexOf(ingredient) == 0) {
      result += ingredient + ",";
      continue;
    }
    result += "+" + ingredient + ",";
  }
  result = result.slice(0, -1);
  return result;
}

export default function Resultats(props) {
  const [RECIPE, setRECIPE] = useState([]);
  const { ingredients } = props.route.params;
  const ingredientsString = arrayToStringIngredients(ingredients);

  const url =
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=7633bbc3ec684167b9f04f0a51610a8b&ingredients=" +
    ingredientsString +
    "&ranking=1";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setRECIPE(json));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={RECIPE}
        renderItem={({ item }) => (
          <Recette recette={item} navigation={props.navigation}></Recette>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
});
