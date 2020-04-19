import React from "react"
import 'react-native-gesture-handler'
import Accueil from "./components/vues/accueil"
import Resultats from "./components/vues/resultats"
import Recipe from "./components/vues/recipe"
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "green"
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
            <MaterialCommunityIcons.Button
              onPress={() => alert('account')}
              name='account'
              backgroundColor='green'
              size={25}
              borderRadius={3600}
              iconStyle={{
                marginRight: 0,
                margin: 'auto'
              }}
            />
          )
      }}>
      <Stack.Screen name="Home" component={Accueil}/>
      <Stack.Screen name="Search" component={Resultats}/>
      <Stack.Screen name="Recipe" component={Recipe}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
