import React, { useState, useEffect } from "react";
import { Text } from "react-native";

export default function Recette(props) {
  const { recette } = props.route.params;
  const url = "https://api.spoonacular.com/recipes/" + recette.id + "/information?apiKey=7633bbc3ec684167b9f04f0a51610a8b";
  const RECIPE = {
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: true,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 7,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 0,
    spoonacularScore: 24.0,
    healthScore: 2.0,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 65.72,
    extendedIngredients: [
      {
        id: 9003,
        aisle: "Produce",
        image: "apple.jpg",
        consistency: "solid",
        name: "apples",
        original: "6 large baking apples",
        originalString: "6 large baking apples",
        originalName: "baking apples",
        amount: 6.0,
        unit: "large",
        meta: [],
        metaInformation: [],
        measures: {
          us: { amount: 6.0, unitShort: "large", unitLong: "larges" },
          metric: { amount: 6.0, unitShort: "large", unitLong: "larges" },
        },
      },
      {
        id: 18371,
        aisle: "Baking",
        image: "white-powder.jpg",
        consistency: "solid",
        name: "baking powder",
        original: "1 tsp baking powder",
        originalString: "1 tsp baking powder",
        originalName: "baking powder",
        amount: 1.0,
        unit: "tsp",
        meta: [],
        metaInformation: [],
        measures: {
          us: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
          metric: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
        },
      },
      {
        id: 2010,
        aisle: "Spices and Seasonings",
        image: "cinnamon.jpg",
        consistency: "solid",
        name: "cinnamon",
        original: "1 tsp cinnamon",
        originalString: "1 tsp cinnamon",
        originalName: "cinnamon",
        amount: 1.0,
        unit: "tsp",
        meta: [],
        metaInformation: [],
        measures: {
          us: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
          metric: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
        },
      },
      {
        id: 1123,
        aisle: "Milk, Eggs, Other Dairy",
        image: "egg.png",
        consistency: "solid",
        name: "egg",
        original: "1 egg",
        originalString: "1 egg",
        originalName: "egg",
        amount: 1.0,
        unit: "",
        meta: [],
        metaInformation: [],
        measures: {
          us: { amount: 1.0, unitShort: "", unitLong: "" },
          metric: { amount: 1.0, unitShort: "", unitLong: "" },
        },
      },
      {
        id: 20081,
        aisle: "Baking",
        image: "flour.png",
        consistency: "solid",
        name: "flour",
        original: "1 cup flour",
        originalString: "1 cup flour",
        originalName: "flour",
        amount: 1.0,
        unit: "cup",
        meta: [],
        metaInformation: [],
        measures: {
          us: { amount: 1.0, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 236.588, unitShort: "ml", unitLong: "milliliters" },
        },
      },
      {
        id: 2047,
        aisle: "Spices and Seasonings",
        image: "salt.jpg",
        consistency: "solid",
        name: "salt",
        original: "1/2 tsp salt",
        originalString: "1/2 tsp salt",
        originalName: "salt",
        amount: 0.5,
        unit: "tsp",
        meta: [],
        metaInformation: [],
        measures: {
          us: { amount: 0.5, unitShort: "tsps", unitLong: "teaspoons" },
          metric: { amount: 0.5, unitShort: "tsps", unitLong: "teaspoons" },
        },
      },
      {
        id: 19335,
        aisle: "Baking",
        image: "sugar-in-bowl.png",
        consistency: "solid",
        name: "sugar",
        original: "1 cup sugar",
        originalString: "1 cup sugar",
        originalName: "sugar",
        amount: 1.0,
        unit: "cup",
        meta: [],
        metaInformation: [],
        measures: {
          us: { amount: 1.0, unitShort: "cup", unitLong: "cup" },
          metric: { amount: 236.588, unitShort: "ml", unitLong: "milliliters" },
        },
      },
    ],
    id: recette.id,
    title: recette.title,
    readyInMinutes: 16,
    servings: 8,
    sourceUrl: "http://www.foodista.com/recipe/GX7P8CY8/apple-or-peach-strudel",
    image: "https://spoonacular.com/recipeImages/73420-556x370.jpg",
    imageType: "jpg",
    summary:
      'Apple Or Peach Strudel might be just the dessert you are searching for. This recipe makes 8 servings with <b>234 calories</b>, <b>3g of protein</b>, and <b>1g of fat</b> each. For <b>56 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. It is a good option if you\'re following a <b>dairy free and vegetarian</b> diet. From preparation to the plate, this recipe takes about <b>16 minutes</b>. Head to the store and pick up baking apples, baking powder, salt, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 27%</b>. This score is not so outstanding. Try <a href="https://spoonacular.com/recipes/apple-strudel-apfel-strudel-73414">Apple Strudel (apfel Strudel)</a>, <a href="https://spoonacular.com/recipes/peach-strudel-507356">Peach Strudel</a>, and <a href="https://spoonacular.com/recipes/peach-walnut-strudel-149300">Peach Walnut Strudel</a> for similar recipes.',
    cuisines: [],
    dishTypes: ["side dish"],
    diets: ["dairy free", "lacto ovo vegetarian"],
    occasions: [],
    winePairing: {},
    instructions: null,
    analyzedInstructions: [],
    originalId: null,
    spoonacularSourceUrl:
      "https://spoonacular.com/apple-or-peach-strudel-73420",
  };
  /*
  const [result, setResult] = useState({});
  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(res => setResult(res));
  }, [result])
  */
 
  if(!result) return null;
  return <Text>{result.title}</Text>;
}
