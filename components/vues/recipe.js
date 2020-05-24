import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  View,
} from "react-native";

export default function Recette(props) {
  const [result, setResult] = useState({});
  const { recette } = props.route.params;
  const url =
    "https://api.spoonacular.com/recipes/" +
    recette.id +
    "/information?apiKey=7633bbc3ec684167b9f04f0a51610a8b";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setResult(json));
  }, []);

  if (!result) return null;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{result.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: result.image,
        }}
      />
      <FlatList
        data={result.extendedIngredients}
        renderItem={(item) => (
          <View style={styles.ingredientContainer}>
            <Image
              style={styles.ingredientImage}
              source={{ uri: item.image }}
            />
            <Text style={styles.ingredientName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.summary}>{result.summary}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
  image: {
    width: 400,
    height: 300,
  },
  summary: {
    padding: 10,
    textAlign: "justify",
  },
  ingredientContainer: {},
  ingredientImage: {
    width: 50,
    height: 50,
  },
  ingredientName: {
    textAlign: "justify",
  },
});
