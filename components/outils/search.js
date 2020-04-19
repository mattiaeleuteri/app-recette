import React, { useState } from "react";
import { StyleSheet, View, TextInput } from 'react-native'
import Autosuggest from "react-autosuggest";

export default function Search() {
  const ingredients = [
    {
        "name": "apple",
        "image": "apple.jpg",
        "id": 9003,
        "aisle": "Produce",
        "possibleUnits": [
            "small",
            "large",
            "piece",
            "slice",
            "g",
            "extra small",
            "medium",
            "oz",
            "cup slice",
            "cup",
            "serving"
        ]
    },
    {
        "name": "applesauce",
        "image": "applesauce.png",
        "id": 9019,
        "aisle": "Canned and Jarred",
        "possibleUnits": [
            "g",
            "oz",
            "cup",
            "serving",
            "tablespoon"
        ]
    },
    {
        "name": "apple juice",
        "image": "apple-juice.jpg",
        "id": 9016,
        "aisle": "Beverages",
        "possibleUnits": [
            "g",
            "drink box",
            "fl oz",
            "oz",
            "teaspoon",
            "cup",
            "serving",
            "tablespoon"
        ]
    },
    {
        "name": "apple cider",
        "image": "apple-cider.jpg",
        "id": 1009016,
        "aisle": "Beverages",
        "possibleUnits": [
            "g",
            "drink box",
            "fl oz",
            "oz",
            "teaspoon",
            "bottle NFS",
            "cup",
            "serving",
            "tablespoon"
        ]
    },
    {
        "name": "apple jelly",
        "image": "apple-jelly.jpg",
        "id": 10019297,
        "aisle": "Nut butters, Jams, and Honey",
        "possibleUnits": [
            "g",
            "oz",
            "packet",
            "teaspoon",
            "cup",
            "serving",
            "tablespoon"
        ]
    }]

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])

  const getSuggestions = (value) => {
	  const inputValue = value.trim().toLowerCase();
	  const inputLength = inputValue.length;
	  return inputLength === 0 ? [] : ingredients.filter(ing => ing.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = suggestion => (
	  <Text>
		  {suggestion.name}
	  </Text>
  );
  
  const inputProps = {
	  placeholder: "Ingredients",
	  value: {query},
	  onChange: (value) => setQuery(value)
  }

  function onSuggestionsFetchRequested({ value }){
    setSuggestions(getSuggestions(value));
  };

  function  onSuggestionsClearRequested(){
    setSuggestions([]);
  };

  return (
    <TextInput style={styles.container}></TextInput>
  );
}

const styles = StyleSheet.create({
  container: {
	backgroundColor: "#F5FCFF",
    padding: 20,
    minWidth: 120
  },
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2
  }
});
