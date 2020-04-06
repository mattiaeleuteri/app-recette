import React, { useState } from "react";
import Autocomplete from "react-native-autocomplete-input";

export default function Search() {
  const ingredients = {title: 'pomme'};

  function findIngredients(query) {
    if (query === "") {
      return [];
    }
    const regex = new RegExp(`${query.trim()}`, "i");
    return ingredients.title.search(regex) >= 0;
  }

  const [query, setQuery] = useState("");
  const data = findIngredients(query);

  return (
    <Autocomplete
      data={data}
      autoCapitalize="none"
      autoCorrect={false}
      defaultValue={query}
      onChangeText={(text) => setQuery(text)}
      placeholder="Ingrédients"
      renderItem={(item) => (
        <TouchableOpacity onPress={() => setQuery(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
      style={{
        backgroundColor: "white",
        borderColor: "#000111",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 25,
        minWidth: 250,
      }}
    />
  );
}
